import express  from "express";
import { adminLogin, userLogin, userRegister } from "../controllers/AuthController.js";

const router = express.Router()

//-----User Login Register Route
router.post('/userRegister', userRegister)
router.post('/userLogin', userLogin)

//-----Admin Login Route
router.post('/adminLogin', adminLogin)


export default router