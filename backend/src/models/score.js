const { Schema, model } = require('mongoose')

const scoreSchema = new Schema({
	name: String,
	score: Number
})

scoreSchema.set('toJSON', {
	transform: (doc, ret) => {
		ret.id = ret._id
		delete ret._id
		delete ret.__v
	}
})

module.exports = model('Score', scoreSchema)