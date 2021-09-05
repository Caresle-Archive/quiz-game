const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI
const uri = MONGO_URI

main()
	.catch(err => console.log(err))

async function main() {
	await mongoose.connect(uri)
	console.log('db connected')
}



