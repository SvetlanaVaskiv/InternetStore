const { Type } = require("../models/models");
const ApiError = require("../error/apiError");

class TypeController {
  async create(req, res, next) {
      try {
        const { name } = req.body;
        const type = await Type.create({ name });
        return res.json(type);
      } catch (e) {
          next(ApiError.badRequest(e.message));
      }
   
  }

  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }
  async delete(req, res) {
   try {
    const { id } = req.body;
    const deleteType = await Type.destroy({ where: { id: id } });
    const types = await Type.findAll();

    return res.json(types );
   } catch (e) {
    next(ApiError.badRequest(e.message));
   }
  }
}

module.exports = new TypeController();
