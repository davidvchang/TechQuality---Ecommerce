import {pool} from '../bd.js'

export const getProducts = async (req, res) => {
    try {
        const products = await pool.query("SELECT * FROM products")
        res.status(200).json(products.rows)
    } catch (ex) {
        res.status(500).json({message: "Ha ocurrido un error:" + ex})
    }
}

export const postProduct = async (req, res) => {
    const {name, description, price, category} = req.body
    try {
        await pool.query("INSERT INTO products (name, description, price, category) VALUES ($1, $2, TRUNC($3, 2), $4)", [name, description, price, category])
        res.status(201).json("Product has been registered correctly")
    } catch (ex) {
        res.status(500).json({message: "Ha ocurrido un error:" + ex})
    }
}

export const deleteProduct = async (req, res) => {
    const {id_product} = req.params

    try {
        const existProduct = await pool.query("SELECT COUNT(*) FROM products WHERE id_product = $1", [id_product])
        if(existProduct.rows[0].count > 0) {
            await pool.query("DELETE FROM products WHERE id_product = $1", [id_product])
            res.status(200).json("Product has been deleted correctly")
        }
    } catch (ex) {
        res.status(500).json({message: "Ha ocurrido un error:" + ex})
    }
}