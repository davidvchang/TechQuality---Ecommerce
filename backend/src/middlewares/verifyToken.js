import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'Access denied, token required' });
    }
  
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // Guardamos el usuario en la petición para su uso en otras rutas
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token or expired' });
    }
}

export default verifyToken