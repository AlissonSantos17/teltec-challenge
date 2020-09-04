const createCar = require('../services/CreateCar');

module.exports = {
  async index(req, res) {
    // const response = await createCar();

    create = await createCar()
    
  }
}

// cada carro tendo uma marca, modelo, nome, ano de fabricação, preço e cor.
