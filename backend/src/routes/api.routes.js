const { Router } = require('express')
const route = Router()

// import question controllers
const {
	getAllQuestions
} = require('../controllers/api/questions.controller')

// import score controllers
const {
	getAllScores,
	newScore
} = require('../controllers/api/score.controller')

// questions routes
route.get('/api/v1/questions', getAllQuestions)

// score routes
route.get('/api/v1/scores', getAllScores)

route.post('/api/v1/test', newScore)

module.exports = route