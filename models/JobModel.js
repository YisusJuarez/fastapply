const { Schema, model } = require("mongoose");

const jobSchema = new Schema({
  companyName = String,
  jobType = String,
  user:{
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  jobUrl = String,
  applicants:[{
    type:Schema.Types.ObjectId,
    ref:'Applicants'
  }],
});

jobSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Job = model("Job", jobSchema);
module.exports = Job
