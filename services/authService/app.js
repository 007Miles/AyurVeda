const express = require('express')
const app = express()
const users = require('./routes/user')
const connectDB = require('./db/connect')
const cors = require('cors')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//middleware
app.use(cors())
app.use(express.json())

//routes
app.use('/api/v1/auth', users)

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
