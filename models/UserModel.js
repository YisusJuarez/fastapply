const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    userName:String,
    email:String,
    passwordHash:String,
    jobs:[{
        type:Schema.Types.ObjectId,
        ref:"Job"
    }]
})

userSchema.set("toJSON",{
    transform:(document, returnedObject)=>{
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})

const User = model("User", userSchema)
module.exports = User;