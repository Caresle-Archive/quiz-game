import CardQuestion from './CardQuestion'
import Card from './Card'

import './CardGroup.css'

const CardGroup = ({ questions, current }) => {
	const { question, answers } = questions[current]
	const handleCardClick = (e) => {
		const parent = (e.target.tagName !== 'SPAN') ?
			e.target : e.target.parentNode
		parent.classList.add('card-selected')
	}

	return (
		<div>
			<CardQuestion question={question}/>
			<div className="container">
				{answers.map((ele, ind) => {
					return <Card key={`card${ind}`} click={handleCardClick} answer={ele.answer}/>
				})}
			</div>
		</div>
	)
}

export default CardGroup