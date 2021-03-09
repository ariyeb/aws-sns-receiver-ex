const express = require('express');
const cors = require('cors');
require("./db/mongoose");

const port = process.env.PORT;
const messagesRouter = require('./routers/messagesRouter');
const router = require('./routers/messagesRouter');

const app = express();
app.use(cors());
app.use(express.json());
app.use(messagesRouter);

app.use("/", (req, res) => {
    res.send("ok");
});

app.listen(port, () => console.log("Server connected, port:", port));