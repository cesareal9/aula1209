// const mongoose = require('mongoose');
const db = require('../config/db.js');
const Schema = db.Schema; 

const autorSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true, },
  year: { type: String, required: true },
  telefones: [String],
  genre: {
    type: String
  },
  cep: {type: Object, required: true,  minLength: 8, maxLength: 8}

});
console.log('Conectado');
const Autor = db.model('Autor', autorSchema);

module.exports = Autor;