import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

import db from './db/connection.js';

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors'

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World");
});

import authRoutes from './routes/auth.routes.js'; 
import messageRoutes from './routes/message.route.js';
import userRoutes from './routes/user.routes.js';

app.use("/auth", authRoutes);
app.use("/message", messageRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => {
    console.log("listening on port " + PORT);
});