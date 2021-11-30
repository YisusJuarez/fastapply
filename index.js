require("dotenv").config();
const jobsRouter = require("./routers/jobsRouter.js");
const express = require('express');
const cors = require('cors')
const app = express()


app.use(cors())
app.use(express.json())


app.use('/api/jobs',jobsRouter)


const PORT = process.env.PORT || 3001
const server = app.listen(PORT, ()=>{
    const port = server.address().port
    console.log("easyapoply listening at http://localhost:"+ port+
    "/")
})