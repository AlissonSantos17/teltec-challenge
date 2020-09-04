const CreateCar = require('../services/CreateCar');

module.exports = {
  async index(req, res) {
    const { name, marca, modelo, ano, preco, cor }

    const create = await CreateCar.create({
      name,
      marca,
      modelo,
      ano,
      preco,
      cor
    });
    console.log(req.body)
    return res.json(create)
  }
}
