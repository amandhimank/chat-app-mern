import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';

import db from './db/connection.js';
import { app, server } from './socket/socket.js';

const _dirname = path.resolve();

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors'

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

import authRoutes from './routes/auth.routes.js'; 
import messageRoutes from './routes/message.route.js';
import userRoutes from './routes/user.routes.js';

app.use("/auth", authRoutes);
app.use("/message", messageRoutes);
app.use("/user", userRoutes);

app.use(express.static(path.join(_dirname, "/frontend/dist")))
app.get("*", (req, res) => {
    res.sendFile(path.join(_dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
    console.log("listening on port " + PORT);
});