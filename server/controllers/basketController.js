const { Basket } = require("../models/models");

class BasketController {
  async getOne(req, res) {
    const basket = await Basket.findOne({ where: { id: req.user.id } });
    return res.json(basket);
  }

}

module.exports = new BasketController();
