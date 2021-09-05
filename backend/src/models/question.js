const { Schema, model } = require('mongoose')

const answersSchema = new Schema({
	answer: String,
	correct: Boolean
}, {_id: false})

const questionSchema = new Schema({
	question: String,
	answers: [answersSchema]
})

module.exports = new model('Question', questionSchema)