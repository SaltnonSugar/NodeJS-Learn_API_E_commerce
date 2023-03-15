
require('dotenv').config()
const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const app = express()

// console.log(`Process::`, process.env);
// init middlware
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())

//init db
require('../dbs/init.mongodb')

// init route
app.use('/', require('../routers'))
// handling error

module.exports = app
