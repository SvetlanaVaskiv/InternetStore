const { Basket } = require("../models/basket");

class BasketController {
  async getOne(req, res) {
    const { id } = req.params;

    const basket = await Basket.findOne({ where: { userId: id } });
    console.log(basket);

    return res.json(basket);
  }
}

module.exports = new BasketController();
