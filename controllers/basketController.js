const { Basket } = require("../models/models");

class BasketController {
  async getOne(req, res) {
    const{ id}  = req.params;
    const basket = await Basket.findOne({ where: { userId: id} });
    return res.json(basket);
  }

}

module.exports = new BasketController();
