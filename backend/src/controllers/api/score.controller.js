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
	})
	// 	.then(data => console.log(data))
	// 	.then(data => res.json(data).status(201))
	res.status(201)
	res.json({name: 'hola'}).end()
	// res.status(200).end()
}

module.exports = {
	getAllScores,
	newScore
}