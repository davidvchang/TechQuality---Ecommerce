import { pool } from '../bd.js'

export const postCheckout = async () => {
    const { cart } = req.body
    const user_id = req.user.id;

    try {
        if(!cart || cart.length === 0) {
            return res.status(400).json({ error: "El carrito está vacío" });
        }
    
        let total_price = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

        const orderRes = await pool.query('INSERT INTO orders (user_id, total_price, status) VALUES ($1, $2, $3) RETURNING id',[user_id || null, total_price, 'pending']);

        const order_id = orderRes.rows[0].id;

        
        for (const item of cart) {
            await pool.query('INSERT INTO order_products (order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4)',[order_id, item.product_id, item.quantity, item.price]);
        }

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