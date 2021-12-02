const bcrypt = require('bcrypt');
const userRouter = require('express').Router();
const User = require('../models/UserModel');


//create user
userRouter.post("/", async (req, res) => {
    const {body} = req;
    const {username, email, password} = body;
    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User({
        userName:username,
        email:email,
        passwordHash
    })

    const savedUser = await user.save();
    res.status(201).json(savedUser);
})

// find all users
userRouter.get("/", async (req, res) => {
    const users = await User.find({}).populate('jobs',{companyName:1, jobType:1,jobUrl:1});
    res.json(users);
})

module.exports = userRouter;