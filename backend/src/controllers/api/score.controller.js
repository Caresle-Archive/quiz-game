const Score = require('../../models/score')

const getAllScores = async (req, res) => {
	const response = await Score.find()
	res.json(response)
}

module.exports = {
	getAllScores
}