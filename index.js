const express = require("express");
require("dotenv").config();
var cors = require("cors");

const app = express();
app.use(cors());
const mailRouter = require("./Routes/MailHandler");
app.use(express.json());

// mailRoutes
app.use("/mail", mailRouter);

app.listen(5000, () => console.log(process.env.TESTPASS));
