const express = require("express");
const bodyParser = require("body-parser");
const verifyWebhook = require("./verify-webhook");
const handleWebhook = require("./handle-webhook");
const State = require('./state');

const state = new State

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", verifyWebhook);
app.post("/", (req, res) =>handleWebhook(req, res, state));

app.get("/state", () => {
    state.getData();
})

app.listen(5000, () => console.log("Express server is listening on port 5000"));
