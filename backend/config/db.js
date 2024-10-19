import mongoose from "mongoose";
 
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://jash22:jash1432@cluster0.0n1k1.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}