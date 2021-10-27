const cors =require('cors')

const errorMiddleware = require('./middleware/errorMiddleware')

const userRoutes = require('./routes/users.routers')

require('dotenv').config()

const {PORT} = require('./config/config')
const express = require('express')
const app = express()

app.set('PORT', PORT)

app.use(express.json())
app.use(cors())

app.use('/users', userRoutes)

app.use(errorMiddleware)

module.exports = app