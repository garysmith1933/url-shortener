const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const { urlModel } = require("./models/urls");

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost/urlShortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.get('/', (req, res) => {
    res.send('Hello!')
})

app.post('/shortenUrl', async (req, res) => {
  try {
    //left off here - shortUrl.findOne is not a function
    const foundUrl = await urlModel.findOne({ fullUrl: req.body.fullUrl });
    console.log(req.body)

    if (foundUrl) return res.send(foundUrl.shortUrl)
  
    const shortenedUrl = await urlModel.create({fullUrl: req.body.fullUrl})
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