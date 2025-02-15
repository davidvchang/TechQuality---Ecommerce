import {Router} from "express"
import {getAllUsers, registerUser} from '../controllers/users.controller.js'

const router = Router()

router.get("/", getAllUsers)
router.post("/", registerUser)

export default router