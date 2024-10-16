import User from "../models/user.model.js";

export const getUsersForSideBar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        // get all users from the database except the loggedInUser
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        return res.status(200).json({ filteredUsers });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};