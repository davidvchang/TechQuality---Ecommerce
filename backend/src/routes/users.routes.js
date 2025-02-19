import {Router} from "express"
import {getAllUsers, registerUser, loginUser} from '../controllers/users.controller.js'
import verifyToken from '../middlewares/verifyToken.js';

const router = Router()

router.get("/", getAllUsers)
router.post("/", registerUser)

router.post("/login", loginUser)
router.get("/autenticatedUser", verifyToken, (req, res) => {
    res.json(req.user); 
});

export default router