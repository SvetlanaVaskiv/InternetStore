const uuid = require("uuid");
const path = require("path");
const { Device, DeviceInfo } = require("../models/models");
const ApiError = require("../error/apiError");

class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((elem) => {
          DeviceInfo.create({
            title: elem.title,
            description: elem.description,
            deviceId: device.id,
          });
        });
      }

      return res.json(device);
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  }

  async getOne(req, res) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: "info" }],
    });
    return res.json(device);
  }

  async updateOne(req, res, next) {
    try {
      const { id } = req.params;
      const device = await Device.findOne({
        where:{id}
      })
     await Device.update({rating: ++device.rating},{
      where: { id }
    });
    return res.json(device);
    } catch (error) {
      next(ApiError.badRequest(err.message));
    }
  }


  async getAll(req, res) {
    let { brandId, typeId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 12;
    let offset = page * limit - limit;

    let devices;
    if (!brandId && !typeId) {
      devices = await Device.findAndCountAll({ 
        order: [
          ['id', 'ASC']
        ],
        limit, offset });
    }

    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({
        order: [
          ['id', 'ASC']
        ],
        where: { brandId },
        limit,
        offset,
      });
    }
    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({
        order: [
          ['id', 'ASC']
        ],
        where: { typeId },
        limit,
        offset,
      });
    }
    if (brandId && typeId) {
      devices = await Device.findAndCountAll({
        order: [
          ['id', 'ASC']
        ],
        where: { typeId, brandId },
        limit,
        offset,
      });
    }
    return res.json(devices);
  }

  async delete(req, res, next) {
    try {
      const { id } = req.body;
      const deleteDevice = await Device.destroy({ where: { id: id } });
      const device = await Device.findAll();

      return res.json(device);
    } catch (err) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new DeviceController();
