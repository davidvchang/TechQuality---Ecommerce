import { Router } from 'express';
import { addToCart, getCart } from '../controllers/cart.controller.js';
import verifyToken from '../middlewares/verifyToken.js';

const router = Router();

router.post('/add', verifyToken, addToCart);
router.get("/", verifyToken, getCart)

export default router;