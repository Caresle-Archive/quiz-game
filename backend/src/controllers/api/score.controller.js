const Score = require('../../models/score')

const getAllScores = async (req, res) => {
	const response = await Score.find()
	res.json(response)
}

const newScore = async (req, res) => {
	const { name, score } = req.body
	Score.create({
		name: name,
		score: score
	}).then(() => res.status(201).end())
}

module.exports = {
	getAllScores,
	newScore
}