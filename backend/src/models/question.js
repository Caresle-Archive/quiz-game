const { Schema, model } = require('mongoose')

const answersSchema = new Schema({
	answer: String,
	correct: Boolean
}, {_id: false})

const questionSchema = new Schema({
	question: String,
	answers: [answersSchema]
})

questionSchema.set('toJSON', {
	transform: (doc, ret) => {
		ret.id = ret._id
		delete ret._id
		delete ret.__v
	}	
})

module.exports = new model('Question', questionSchema)