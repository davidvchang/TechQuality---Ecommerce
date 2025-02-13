import {Router} from 'express'
import {getProducts, postProduct, deleteProduct, getOneProduct} from "../controllers/products.controller.js"

const router = Router()

router.get("/", getProducts)
router.post("/", postProduct)
router.delete("/:id_product", deleteProduct)
router.get("/:id_product", getOneProduct)

export default router