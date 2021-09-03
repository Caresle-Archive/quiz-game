require('dotenv').config()
require('./mongo')
const express = require('express')
const app = express()
const cors = require('cors')

const PORT = process.env.PORT || 3001

// routes imports
const apiRoutes = require('./routes/api.routes')

//middlewares
app.use(cors())
app.use(express.json())

// routes

app.use(apiRoutes)

app.listen(PORT, () => {
	console.log(`Server on port ${PORT}`)
})