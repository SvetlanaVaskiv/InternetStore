const ApiError = require("../error/apiError");
const { BasketDevice } = require("../models/basket_device");
const {  Basket } = require("../models/basket");
const { Device } = require("../models/device");
const jwt_decode = require("jwt-decode");

class BasketDeviceController {
  async getAll(req, res) {
    try {
      const basketId = await Basket.findOne({
        where: { userId: req.query[0] },
      });
      const basketDevice = await BasketDevice.findAndCountAll({
        where: { basketId: basketId.id },
      });
      const deviceId = basketDevice.rows.map((basket) => basket.deviceId);
      const devices = await Device.findAndCountAll({ where: { id: deviceId } });
      return res.json(devices);
    } catch (error) {
      next(ApiError.badRequest(err.message));
    }
  }
  async updateCount(req, res, next) {
    try {
      const { id, userId } = req.body;
      let { count } = req.body;

      const basket = await Basket.findOne({
        where: { userId: userId },
      });
      const updatedBasket = await BasketDevice.update(
        { count: ++count },
        {
          where: { basketId: id },
        }
      );

      return res.json(basket);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async create(req, res, next) {
    try {
      const { id, count, user } = req.body;
      const userId = jwt_decode(user);
      const basketId = await Basket.findOne({
        where: { userId: userId.id },
      });
      let result = await BasketDevice.findOne({ where: { deviceId: id } });
      let updateCount = result?.count;
      if (result === null) {
        await BasketDevice.create({
          deviceId: id,
          basketId: basketId.id,
          count: count,
        });
      } else {
        await BasketDevice.update(
          { count: ++updateCount },
          {
            where: { deviceId: id },
          }
        );
      }
      const basket = await BasketDevice.findAndCountAll({
        where: { basketId: basketId.id },
      });
      return res.json(basket);
    } catch (error) {
      next(ApiError.badRequest(error.message));
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
