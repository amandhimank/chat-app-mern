import User from "../models/user.model.js";
import { generateJwtTokenAndSetCookie } from "../utils/jwt.js";

export const signup = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body;

        if(password !== confirmPassword) {
            return res.status(401).json({ error: "Passwords don't Match" })
        }

        const user = await User.findOne({ username });
        if(user) {
            return res.status(400).json({ error: "User Already Exists!", success: false });
        }

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        // Creating new user
        const newUser = new User({
            fullname,
            username,
            password,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });

        if (newUser) {
            const response = await newUser.save();

            // generate jwt token and set cookie
            const payload = {
                id: response._id,
                username: response.username
            }
            generateJwtTokenAndSetCookie(payload, res);
            return res.status(200).json({ message: "Signed up successfully", user: response });
        } else {
            return res.status(400).json({ error: "Invalid User Data" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(400).json({ error: "Invalid Credentials!" });
        }

        // generate jwt token and set cookie
        const payload = {
            id: user._id,
            username: user.username
        };
        generateJwtTokenAndSetCookie(payload, res);

        return res.status(200).json({ message: "Logged in successfully", user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export const logout = (req, res) => {
    try {
        res.clearCookie("jwt");
        return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};