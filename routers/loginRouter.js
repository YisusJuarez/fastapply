const loginRouter = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
loginRouter.post("/", async (req, res) => {
  const { body } = req;
  const { email, password } = body;

  const user = await User.findOne({ email });
  console.log("user find:", user);
  const verifyPassword =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!user && !verifyPassword) {
    return res
      .status(401)
      .json({ error: "Your email or password is incorrect" });
  }
  const userForToken = {
    email: user.email,
    id: user._id,
  };

  const token = jwt.sign(userForToken, process.env.SECRET_KEY, {
    expiresIn: 60 * 60 * 24 * 7,
  });

  res.send({
      token,
      email:user.email,
      userName:user.userName,
  })
});


module.exports = loginRouter;