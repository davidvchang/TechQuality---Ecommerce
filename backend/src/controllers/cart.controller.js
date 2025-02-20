import { pool } from '../bd.js'

export const addToCart = async (req, res) => {
    const { product_id, quantity } = req.body;
    const user_id = req.user.id;

    try {
        const productExist = await pool.query("SELECT * FROM products WHERE id_product = $1", [product_id]);
        if (productExist.rows.length === 0) {
            return res.status(404).json({ message: "Product not found" });
        }
        const cartItemExist = await pool.query("SELECT * FROM cart_items WHERE user_id = $1 AND product_id = $2", [user_id, product_id]);
        
        if (cartItemExist.rows.length > 0) {
            await pool.query("UPDATE cart_items SET quantity = quantity + $1 WHERE user_id = $2 AND product_id = $3", [quantity, user_id, product_id]);
            return res.status(200).json({ message: "Product quantity updated in cart" });
        } else {
            await pool.query("INSERT INTO cart_items (user_id, product_id, quantity) VALUES ($1, $2, $3)", [user_id, product_id, quantity]);
            return res.status(201).json({ message: "Product added to cart" });
        }
    } catch (ex) {
        res.status(500).json({ message: "Error occurred: " + ex });
    }
}

export const getCart = async (req, res) => {
    const user_id = req.user.id;

    try {
        const cart = await pool.query("SELECT * FROM cart_items WHERE user_id = $1", [user_id])
        return res.status(200).json(cart.rows)
    } catch (ex) {
        res.status(500).json({ message: "Error occurred: " + ex });
    }
}

export const deleteProductInCart = async (req, res) => {
    const {id_product} = req.params
    const user_id = req.user.id;

    try {
        await pool.query("DELETE FROM cart_items WHERE user_id = $1 AND product_id = $2", [user_id, id_product])
        res.status(204).json("Product has been deleted successful")
    } catch (ex) {
        res.status(500).json({ message: "Error occurred: " + ex });
    }
}