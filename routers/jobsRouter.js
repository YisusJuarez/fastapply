const jobsRouter = require("express").Router();
const createUrl = require("../utils/createUrl");

//Create a new job
jobsRouter.post("/:id", (req, res) => {
  console.log("POST /jobs/:id");
  const body = req.body;
  // create request to db for creating job to the user
  const { id } = req.params;
  const job = {
    companyName: body.companyName,
    jobType: body.jobType,
    userId: id,
    jobUrl: createUrl(id),
  };
  //save job to db
  //response the job url apply to
  console.log("Job: ", job);
  res.json(job);
});

module.exports = jobsRouter;
