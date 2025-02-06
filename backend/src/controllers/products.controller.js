import {pool} from '../bd.js'

export const getProducts = async (req, res) => {
    try {
        const products = await pool.query("SELECT * FROM products")
        res.status(200).json(products.rows)
    } catch (ex) {
        res.status(500).json({message: "Ha ocurrido un error:" + ex})
    }
}