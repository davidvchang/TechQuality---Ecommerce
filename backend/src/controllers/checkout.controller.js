import { pool } from '../bd.js'

export const postCheckout = async (req, res) => {
    console.log('Checkout request received:', req.body);
    const user_id = req.user.id;
    const { total_price, products } = req.body

    try {

        if (!total_price || products.length === 0) {
            return res.status(400).json({ message: "Invalid data" });
        }

        const orderRes = await pool.query('INSERT INTO orders (user_id, total_price, status) VALUES ($1, $2, $3) RETURNING id_order', [user_id, total_price, 'pending']);
        const order_id = orderRes.rows[0].id_order;

        console.log('Order created with ID:', order_id);
        
        for (const item of products) {
            console.log("Inserting product:", item);
            await pool.query('INSERT INTO order_products (order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4)',[order_id, item.product_id, item.quantity, item.price]);
        }
        
        await pool.query('DELETE FROM cart_items WHERE user_id = $1', [user_id]);

        res.status(201).json({ message: "Order created", order_id });
    } catch (ex) {
        res.status(500).json({ message: "An Error has been ocurred: " + ex });
    }
}

export const getCheckout = async (req, res) => {
    const { order_id } = req.params;

    try {
        const orderRes = await pool.query('SELECT id_order, user_id, total_price, status FROM orders WHERE id_order = $1',[order_id]);

        if (orderRes.rows.length === 0) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.json(orderRes.rows[0]);

        const productsRes = await pool.query('SELECT product_id, quantity, price FROM order_products WHERE order_id = $1',[order_id]);
        res.status(200).json(productsRes.rows)

    } catch (ex) {
        res.status(500).json({ message: "An Error has been ocurred: " + ex });
    }
};