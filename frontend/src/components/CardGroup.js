import CardQuestion from './CardQuestion'
import Card from './Card'

import './CardGroup.css'

const CardGroup = ({ questions, current }) => {
	const { question, answers } = questions[current]
	
	const handleCardClick = (e, isCorrect) => {
		const parent = (e.target.tagName !== 'SPAN') ?
			e.target : e.target.parentNode
		parent.classList.add('card-selected')
		console.log(parent, isCorrect)
	}

	return (
		<div>
			<CardQuestion question={question}/>
			<div className="container">
				{answers.map((ele, ind) => {
					return <Card key={`card${ind}`} click={handleCardClick} answer={ele.answer} correct={ele.correct}/>
				})}
			</div>
		</div>
	)
}

export default CardGroup