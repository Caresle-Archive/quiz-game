const Score = require('../../models/score')

const getAllScores = async (req, res) => {
	const response = await Score.find()
	res.json(response)
}

const newScore = async (req, res) => {
	const { name_input, score_input } = req.body
	Score.create({
		name: name_input,
		score: parseInt(score_input)
	}).then(() => console.log('score saved'))
	res.status(200).redirect('http://localhost:3000')
}

module.exports = {
	getAllScores,
	newScore
}