const { Schema, model } = require("mongoose");

//applicant monogoose schema
const applicantSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  profile: String,
  address: String,
  salary: Integer,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

applicantSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Applicant = model("Applicant", applicantSchema);