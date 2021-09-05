const { Router } = require('express')
const route = Router()

// import question controllers
const {
	getAllQuestions
} = require('../controllers/api/questions.controller')

// import score controllers
const {
	getAllScores
} = require('../controllers/api/score.controller')

// questions routes
route.get('/api/v1/questions', getAllQuestions)

// score routes
route.get('/api/v1/scores', getAllScores)

module.exports = route