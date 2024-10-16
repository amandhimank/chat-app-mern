import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/user.model.js';
dotenv.config();

export const jwtAuthMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No Token Provided!" });
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - Invalid Token!" });
        }
        
        const user = await User.findById(decoded.id).select("-password");
        if (!user) {
            return res.status(404).json({ error: "User not found!" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export const generateJwtTokenAndSetCookie = (payload, res) => {
    // Generate Token
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });
    // Set Cookie
    res.cookie("jwt", token, {
        httpOnly: true,  // prevent XSS attacks => cross-site scripting attacks
        sameSite: "strict", // prevents CSRF attacks => cross-site request forgery attacks
        secure: false, 
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });
};