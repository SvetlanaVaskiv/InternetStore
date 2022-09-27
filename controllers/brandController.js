const { Brand } = require("../models/brand");
const ApiError = require("../error/apiError");

class BrandController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const brand = await Brand.create({ name });
      return res.json(brand);
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  }

  async getAll(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }
  async delete(req, res, next) {
    try {
      const { id } = req.body;
      const deleteBrand = await Brand.destroy({ where: { id } });
      const brands = await Brand.findAll();
      return res.json(brands);
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  }
}

module.exports = new BrandController();
