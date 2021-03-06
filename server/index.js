require('dotenv').config()
const sequelize= require('./db')
const models = require('./models/models')
const express = require('express')
const cors = require('cors')
const fileUpload= require('express-fileupload')
const router = require('./routes/index')
const errorHadler = require('./middleware/ErrorHandlerMiddleware')
const path = require('path')

const PORT= process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
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