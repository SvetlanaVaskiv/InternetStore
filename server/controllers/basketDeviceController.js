const ApiError = require("../error/apiError");
const { BasketDevice, Basket } = require("../models/models");

class BasketDeviceController {
  async getAll(req, res) {
    const basketId = await Basket.findOne({ where: { id: req.user.id } });
    const basketDevice = await BasketDevice.findAndCountAll({
      where: { basketId: basketId.id },
    });
    return res.json(basketDevice);
  }

  async create(req, res, next) {
    try {
      const { id } = req.body;
      const basketId = await Basket.findOne({ where: { userId: req.body.user.id } });
      console.log(basketId  )


      const basketDevice = await BasketDevice.create({
        deviceId: id,
        basketId: basketId.id,
      });
      console.log(basketDevice)

      return res.json(basketDevice);
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  }

  async delete(req, res, next) {
    try {
      const { id, basketId } = req.body;
      if (id) {
        const deleteDevice = await BasketDevice.destroy({ where: { id: id } });
      }
      if (basketId === req.user.id) {
        const clearBasket = await BasketDevice.destroy({ where: { basketId } });
      }
      const basketDevice = await BasketDevice.findAndCountAll({
        where: { basketId: req.user.id },
      });

      return res.json(basketDevice);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new BasketDeviceController();
