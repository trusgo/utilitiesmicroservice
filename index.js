const express = require("express");
require("dotenv").config();

const app = express();
const mailRouter = require("./Routes/MailHandler");
app.use(express.json());

// mailRoutes
app.use("/mailHandler", mailRouter);

app.listen(5000, () => console.log(process.env.TESTAUTH));
