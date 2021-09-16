/*
Load sample data for the db
*/
require('dotenv').config()
const MONGO_URI = process.env.MONGO_URI
const uri = MONGO_URI
const mongoose = require('mongoose')


const Question = require('./models/question')
const Score = require('./models/score')

const questionData = () => {
	Question.insertMany([{
		question: '2+2=?',
		answers: [
			{
				answer: '4',
				correct: true
			},
			{
				answer: '3',
				correct: false
			},
			{
				answer: '2',
				correct: false
			},
			{
				answer: '1',
				correct: false
			}
		]
	},
	{
		question: '3-3=?',
		answers: [
			{
				answer: '0',
				correct: true
			},
			{
				answer: '1',
				correct: false
			},
			{
				answer: '2',
				correct: false
			},
			{
				answer: '-1',
				correct: false
			}
		]
	}
	]).then(() => console.log('question created'))
}

const scoreData = () => {
	Score.insertMany([{
		name: 'AAB',
		score: 2
	},
	{
		name: 'BBB',
		score: 1
	},
	{
		name: 'CCC',
		score: 0
	}
	]).then(() => console.log('Score created'))
}

const main = async () => {
	await mongoose.connect(uri)
	console.log('db connected')
	console.log('Close this when question and score created message show')
	questionData()
	scoreData()
}

main()
	.catch(err => console.log(err))