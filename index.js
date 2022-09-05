require('dotenv').config()
const sequelize= require('./db')
const models = require('./models/models')
const express = require('express')
const cors = require('cors')
const fileUpload= require('express-fileupload')
const router = require('./routes/index')
const errorHadler = require('./middleware/ErrorHandlerMiddleware')
const path = require('path')

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
const PORT= process.env.PORT || 8000

const app = express()
app.use(cors())
app.use(express.json())
//app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))

  // Exprees will serve up production assets
  app.use(express.static(path.join(__dirname, "client/build")));

  // Express serve up index.html file if it doesn't recognize route
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });


app.use('/api', router)


app.use(errorHadler)

const start= async () =>{
    try {
         await sequelize.authenticate()
         await sequelize.sync()
        app.listen(PORT, ()=> console.log(`listening on port ${PORT}` ))
    } catch (err) {
        console.error(err)
    }
}

start()