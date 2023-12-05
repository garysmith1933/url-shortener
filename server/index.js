const express = require("express");
const mongoose = require("mongoose");
const app = express();
const shortUrl = require("./models/urls");

app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost/urlShortener")


app.get('/', (req, res) => {
    res.send('Hello!')
})

app.post('/shortenUrl', async (req, res) => {
  const foundUrl = await shortUrl.findOne({ fullUrl: req.body.fullUrl });

  if (foundUrl) res.send(foundUrl.shortUrl)

  const shortenedUrl = await shortUrl.create({fullUrl: req.body.fullUrl})
  res.send(shortenedUrl.shortUrl)
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})