const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://zendy199x:zendy199x@taskmangerexpressjs.piye3yp.mongodb.net/TASK-MANAGER-EXPRESS-JS?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to DB!"))
    .catch((error) => console.log(error));
};

module.exports = connectDB;
