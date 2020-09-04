const mongoose = require('mongoose');
const { Decimal128 } = require('mongodb');

const CreateCar = new mongoose.Schema({
  name: String,
  marca: String,
  modelo: String,
  ano: [Number],
  preco: Number,
  cor: String
})

module.exports = mongoose.model('carro', CreateCar);