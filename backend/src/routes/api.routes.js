const { Router } = require('express')
const route = Router()

// import question controllers
const {
	getAllQuestions
} = require('../controllers/api/questions.controller')

// import score controllers
const {
	getAllScores,
	getTopScores,
	newScore,
	deleteScore
} = require('../controllers/api/score.controller')

// questions routes
route.get('/api/v1/questions', getAllQuestions)

// score routes
route.get('/api/v1/scores', getAllScores)

route.get('/api/v1/topscores', getTopScores)

route.post('/api/v1/scores', newScore)

route.delete('/api/v1/scores', deleteScore)

module.exports = route