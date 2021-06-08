require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const router = require("./routes");

const PORT = process.env.PORT || 3000;
const app = express();

const morganLog = process.env.NODE_ENV === "production" ? morgan("common") : morgan("dev");
app.use(morganLog);
app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
