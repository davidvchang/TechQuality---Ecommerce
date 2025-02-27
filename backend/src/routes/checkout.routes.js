import { Router } from "express";
import verifyToken from '../middlewares/verifyToken.js';
import {getCheckout, postCheckout} from '../controllers/checkout.controller.js'

const router = Router();

router.get("/", verifyToken, getCheckout)
router.post("/", verifyToken, postCheckout)


export default router