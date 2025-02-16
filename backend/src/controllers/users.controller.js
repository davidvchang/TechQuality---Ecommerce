import {pool} from '../bd.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()


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

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (existUser.rows.length === 0) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const user = existUser.rows[0];

        const validPassword = await bcrypt.compare(password, user.password);
        
        if(!validPassword) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign(
            {id: user.id, email: user.email},
            process.env.JWT_SECRET,
            {expiresIn: "1h"}
        )

        res.json({ message: "Login successful", token });
    } catch (ex) {
        res.status(500).json({message: "An error has ocurred:" + ex})
    }
}