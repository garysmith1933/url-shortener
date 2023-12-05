const express = require("express");
const mongoose = require("mongoose");
const app = express();
const urlModel = require("./models/urls");


mongoose.connect("mongodb://localhost/urlShortener")


app.get('/', (req, res) => {
    res.send('Hello!')
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})