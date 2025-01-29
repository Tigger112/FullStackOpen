const express = require('express')
const config = require('./utils/config')
const blogRouter = require('./controllers/blogs')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

mongoose.connect(config.MONGOOSE_URI)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log(`error connecting to MongoDB ${error.message}`);
  })

app.use(cors())
app.use(express.json())
app.use("/api/blogs", blogRouter)

module.exports = app