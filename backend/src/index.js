require('dotenv').config()
require('./mongo')
const express = require('express')
const app = express()
const cors = require('cors')

const corsOptions = {
	origin: '*',
	allowedHeaders: ['Content-Type', 'Access-Control-Allow-Origin']
}

const PORT = process.env.PORT || 3001

// routes imports
const apiRoutes = require('./routes/api.routes')

//middlewares
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use(apiRoutes)

app.listen(PORT, () => {
	console.log(`Server on port ${PORT}`)
})