require("dotenv").config();
const express = require("express");
const cors = require("cors");

const router = require("./routes");
const morgan = require("morgan");
const { connectToDb } = require("./utils/db");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan(process.env.NODE_ENV === "production" ? "common" : "dev"));
app.use(express.json());
app.use(cors());
app.use("/api", router);
connectToDb();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}.`);
});
