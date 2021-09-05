const { Router } = require('express')
const route = Router()

const {
	getAllQuestions
} = require('../controllers/api/questions.controller')

route.get('/api/v1/questions', getAllQuestions)

module.exports = route