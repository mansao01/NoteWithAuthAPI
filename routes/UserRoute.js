import express from "express";
import {register, loginUser, logoutUser, getProfile} from "../controller/User.js";
import {authMiddleware} from "../middleware/Auth.js";
import {refreshToken} from "../controller/RefreshToken.js";
const router = express.Router();

router.get("/v1/profile", authMiddleware, getProfile)
router.post("/v1/register", register)
router.post("/v1/login", loginUser)
router.post("/v1/logout", logoutUser)
router.post("/v1/token", refreshToken)

export default router;