require("dotenv").config();
const jobsRouter = require("./controllers/jobsRouter.js");
const userRouter = require("./controllers/userRouter.js");
const loginRouter = require("./controllers/loginRouter.js");
const express = require("express");
const cors = require("cors");
const app = express();

require("./mongo.js");
app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobsRouter);
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);

const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
  const port = server.address().port;
  console.log("easyapoply listening at http://localhost:" + port + "/");
});
