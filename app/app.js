require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const router = require('./routers')
const middleware = require('./middleware')
const {notFoundHandler,errorHandler} = require('./error')
// public middleware
const publicDirectory = path.join(__dirname,'../public')
app.use(express.static(publicDirectory))
// middleware
app.use(middleware)
//router
app.use(router)
// error handler middleware
app.use(notFoundHandler)
app.use(errorHandler)

module.exports = app