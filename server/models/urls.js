const mongoose = require("mongoose");
const { model } = require("mongoose");
const { nanoid } = require('nanoid');
const { Schema } = mongoose;

const urlSchema = new Schema({
  fullUrl: {
    type: String,
    required: true
  },
  
  shortUrl: {
    type: String,
    required: true,
    default: nanoid(6)
  }
});

const urlModel = model("url", urlSchema);

module.exports = {
  urlModel
};
