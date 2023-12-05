const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const shortUrl = require("./models/urls");

app.use(express.urlencoded({ extended: false }));
app.use(cors())

mongoose.connect("mongodb://localhost/urlShortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.get('/', (req, res) => {
    res.send('Hello!')
})

app.post('/shortenUrl', async (req, res) => {
  try {
    //left off here
    const foundUrl = await shortUrl.findOne({ fullUrl: req.body.fullUrl });

    if (foundUrl) res.send(foundUrl.shortUrl)
  
    const shortenedUrl = await shortUrl.create({fullUrl: req.body.fullUrl})
    res.send(shortenedUrl.shortUrl)
  }

  catch (err) {
    console.log(err)
  }
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})