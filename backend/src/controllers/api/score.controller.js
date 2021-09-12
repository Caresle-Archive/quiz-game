const Score = require('../../models/score')

const getAllScores = async (req, res) => {
	const response = await Score.find()
	res.json(response)
}

const newScore = async (req, res) => {
	const { name_input, score_input } = req.body
	const response = await Score.create({
		name: name_input,
		score: parseInt(score_input)
	})
	res.status(201)
	res.json(response).end()
}

module.exports = {
	getAllScores,
	newScore
}