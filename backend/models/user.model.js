import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: [ "male", "female" ]
    },  
    profilePic: {
        type: String,
        default: "",
    }
    // created at, updated at
}, { timestamps: true });

userSchema.pre('save', async function(next) {
    const user = this;
    try {
        // Generate salt
        const salt = await bcrypt.genSalt(10);
        // Create hashed password
        const hashedPassword = await bcrypt.hash(user.password, salt);
        // update user password with the hashed one
        user.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.comparePassword = async function(userPassword) {
    try{
        // Use bcrypt to compare the provided password with hashed password
        const isMatch = await bcrypt.compare(userPassword, this.password);
        return isMatch;
    }
    catch(err){
        throw err;
    }
}

const User = mongoose.model('User', userSchema);
export default User;