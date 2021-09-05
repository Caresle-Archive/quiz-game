const Question = require('../../models/question')

const getAllQuestions = async (req, res) => {
	const response = await Question.find()
	console.log(response)
	res.json(response)
}

module.exports = {
	getAllQuestions
}