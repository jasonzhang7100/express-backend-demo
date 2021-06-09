// mongoose.connect("mongodb://localhost:27017/enrol-db")
const mongoose = require("mongoose");

exports.connectToDb = () => {
  const connectionString = process.env.CONNECTION_STRING;

  const db = mongoose.connection;
  db.on("connected", () => {
    console.log(`Datebase connected with ${connectionString}.`);
  });
  db.on("error", error => {
    console.log("Datebase connection failed.");
    console.log(error.message);
    process.exit(1);
  });
  db.on("disconnected", () => {
    console.log("Datebase disconnected.");
  });

  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
