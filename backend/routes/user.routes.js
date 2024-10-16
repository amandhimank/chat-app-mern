import express from 'express';
import { getUsersForSideBar } from '../controllers/user.controller.js';
import { jwtAuthMiddleware } from '../utils/jwt.js';
const router = express.Router();

router.get("/", jwtAuthMiddleware, getUsersForSideBar);

export default router;