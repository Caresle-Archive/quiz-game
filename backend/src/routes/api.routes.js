const { Router } = require('express')
const route = Router()

const {
	getAll
} = require('../controllers/api.controller')

route.get('/api/v1/', getAll)


module.exports = route