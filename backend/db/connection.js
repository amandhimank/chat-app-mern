import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on("connected", () => {
    console.log("Connected to MongoDB");
});

db.on("disconnected", () => {
    console.log("Disonnected from MongoDB");
});

db.on("error", () => {
    console.log("MongoDB Error Occurred");
});

export default db;