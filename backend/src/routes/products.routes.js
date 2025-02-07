import {Router} from 'express'
import {getProducts, postProduct, deleteProduct} from "../controllers/products.controller.js"

const router = Router()

router.get("/", getProducts)
router.post("/", postProduct)
router.delete("/:id_product", deleteProduct)

export default router