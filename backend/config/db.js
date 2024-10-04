import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://pranayapounikar24:O1axpkoV0NIFIIT0@cluster0.dgslc.mongodb.net/food-delivery').then(()=>console.log("database connected"));
}