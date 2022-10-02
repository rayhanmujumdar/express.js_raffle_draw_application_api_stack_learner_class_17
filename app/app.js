require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./routers')
const middleware = require('./middleware')
const {notFoundHandler,errorHandler} = require('./error')
// middleware
app.use(middleware)
//router
app.use(router)
// error handler middleware
app.use(notFoundHandler)
app.use(errorHandler)

module.exports = app