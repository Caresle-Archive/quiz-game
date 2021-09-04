const Question = require('../models/question')

const getAll = async (req, res) => {
	const response = await Question.find()
	console.log(response)
	res.json(response)
}

module.exports = {
	getAll
}