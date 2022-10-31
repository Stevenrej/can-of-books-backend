'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema ({
  title: { type: String, required: true },
  description: { type: String, required: true},
  rating: { type: Number, required: true}
})


const BookModel = mongoose.model('Book', bookSchema);

module.exports = BookModel;