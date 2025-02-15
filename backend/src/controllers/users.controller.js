import {pool} from '../bd.js'
import bcrypt from 'bcryptjs';


export const getAllUsers = async (req, res) => {
    try {
        const users = await pool.query("SELECT * FROM users")
        res.status(200).json(users.rows)
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred: ", ex})
    }
}

export const registerUser = async (req, res) => {
    const {name, last_name, email, password} = req.body
    try {
        const hashedPassword = await bcrypt.hash(password, 10)

        await pool.query("INSERT INTO users (name, last_name, email, password) VALUES ($1, $2, $3, $4)", [name, last_name, email, hashedPassword])
        res.status(201).json("user has been registered correctly")
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred:" + ex})
    }
}