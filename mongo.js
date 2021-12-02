//mongoose connection
const mongoose = require("mongoose");
const { MONGO_DB_URI, MONGO_DB_URI_TEST, NODE_ENV } = process.env;

const connectionString =
  NODE_ENV === "development" || NODE_ENV == "production"
    ? MONGO_DB_URI_TEST
    : MONGO_DB_URI;

console.log(connectionString);
mongoose
  .connect(connectionString)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
