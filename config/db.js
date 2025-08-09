import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://yosrmrabet:233JFT8204@cluster0.on9o6mp.mongodb.net/food-del').then(
        () => console.log("MongoDB connected")
    );
}