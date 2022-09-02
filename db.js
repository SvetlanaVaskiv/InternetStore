const {Sequelize}= require('sequelize');
module.exports =
  process.env.NODE_ENV === "production"
    ? new Sequelize(process.env.DATABASE_URL)
    : new Sequelize(
        process.env.DB_NAME || "elitypescript",
        process.env.DB_USER || "eli",
        process.env.DB_PASSWORD,
        {
          dialect: "postgres",
          host: process.env.PSQL_HOST || "localhost",
         // port: process.env.DB_PORT,
          dialect: "postgres",
          pool: {
            max: 100,
            min: 0,
            idle: 200000,
            // @note https://github.com/sequelize/sequelize/issues/8133#issuecomment-359993057
            acquire: 1000000,
          },
        }
      );
