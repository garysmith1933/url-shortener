const mongoose = require("mongoose");
const { nanoid } = require("nanoid");
const { Schema } = mongoose;

const urlSchema = new Schema({
  key: nanoid(),
  fullUrl: {
    type: String,
    required: true
  },
  
  shortUrl: {
   type: String,
   required: true,
   default: nanoid(6)
  }
})

urlModel = mongoose.model("url", urlSchema);
module.exports = {
  urlModel
}