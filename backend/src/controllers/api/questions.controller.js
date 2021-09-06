const Question = require('../../models/question')

const getAllQuestions = async (req, res) => {
	const response = await Question.find()
	res.json(response)
}

module.exports = {
	getAllQuestions
}