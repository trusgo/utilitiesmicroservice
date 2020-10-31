const express = require("express");
const app = express();
const mailRouter = require("./Routes/MailHandler");
app.use(express.json());

// mailRoutes
app.use("/mailHandler", mailRouter);

app.listen(5000, () => console.log("server running..."));
