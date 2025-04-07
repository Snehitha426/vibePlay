import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    fullName:{
        type:String,
        requied: true
    },
    imageUrl:{
        type:String,
        requied: true,
    },
    clerkId:{
        type:String,
        requied: true,
        unique: true,
    }
},
{timestamps:true}
);
    
export const User = mongoose.model("User", userSchema);