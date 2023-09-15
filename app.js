const express = require('express')
require('dotenv').config()
require('./config/db-confg')
const createError = require('http-errors')
const cors = require('cors')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const PORT = process.env.PORT
const personRouter = require('./routes/person-route')


const app = express()


// middlewares
app.use(cors())
app.use(bodyparser.urlencoded({extended: true}))
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api', personRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
