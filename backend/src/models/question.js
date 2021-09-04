const { Schema, model } = require('mongoose')

const questionSchema = new Schema({
	question: String,
	answers: [{
		answer: String,
		correct: Boolean
	}]
})

module.exports = new model('Question', questionSchema)