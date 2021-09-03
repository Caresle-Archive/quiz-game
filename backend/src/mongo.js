const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI

const uri = MONGO_URI

main()
	.then(() => console.log('db connected'))
	.catch(err => console.log(err))

async function main() {
	await mongoose.connect(uri)
}



