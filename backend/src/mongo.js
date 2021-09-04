const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI
const Question = require('./models/question')
const uri = MONGO_URI

main()
	.catch(err => console.log(err))

async function main() {
	await mongoose.connect(uri)
	console.log('db connected')
}



