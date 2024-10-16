import express from 'express'
import { jwtAuthMiddleware } from '../utils/jwt.js';
import { getMessages, sendMessage } from '../controllers/message.controller.js';
const router = express.Router()

// get messages between the current uder and the user whose id is provided in params
router.get("/:id", jwtAuthMiddleware, getMessages);

router.post("/send/:id", jwtAuthMiddleware, sendMessage);

export default router;