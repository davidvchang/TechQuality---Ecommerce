import { Router } from 'express';
import { addToCart, getCart, deleteProductInCart } from '../controllers/cart.controller.js';
import verifyToken from '../middlewares/verifyToken.js';

const router = Router();

router.post('/add', verifyToken, addToCart);
router.get("/", verifyToken, getCart)
router.delete("/:id_product", verifyToken, deleteProductInCart)

export default router;