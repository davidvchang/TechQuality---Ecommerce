import {pool} from '../bd.js'

export const registerUser = async (req, res) => {
    const {name, last_name, email, password} = req.body
    try {
        await pool.query("INSERT INTO users (name, last_name, email, password) VALUES ($1, $2, $3, $4)", [name, last_name, email, password])
        res.status(201).json("user has been registered correctly")
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred:" + ex})
    }
}