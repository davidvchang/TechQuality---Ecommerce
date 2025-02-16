import {Router} from "express"
import {getAllUsers, registerUser, loginUser} from '../controllers/users.controller.js'

const router = Router()

router.get("/", getAllUsers)
router.post("/", registerUser)

router.post("/login", loginUser)

export default router