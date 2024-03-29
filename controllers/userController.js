const ApiError = require("../error/apiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const models=require('../models/models')
//const User = require("../models/user.js");
//const  Basket  = require("../models/basket.js");
//const models= require ("../models");
//console.log('models',models)
//for(const key in models){
 // console.log(key)
//}
const { User } = models;
const {Basket}=models;


const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest("Incorrect email or password"));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(
        ApiError.badRequest("User with the same email  already exists")
      );
    }
    const hashPassword = await bcrypt.hash(password, 7);
    const admin = await User.findOne({ where: { role: "ADMIN" } });
    let token;
    let user;
    if (!admin) {
      const user = await User.create({
        email,
        role: "ADMIN",
        password: hashPassword,
      });
      token = generateJwt(user.id, user.email, user.role);
    } else {
      user = await User.create({ email, role, password: hashPassword });
      console.log(Basket);

      const basket = await Basket.create({ userId: user.id });
      console.log(user.id);
      token = generateJwt(user.id, user.email, user.role);
    }
    return res.json({ token });
  }
  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.internal("User could not be found"));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal("Password is incorrect"));
    }
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    return res.json({ token });
  }
}

module.exports = new UserController();
