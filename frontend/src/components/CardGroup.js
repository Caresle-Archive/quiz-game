import CardQuestion from './CardQuestion'
import Card from './Card'

import './CardGroup.css'

const CardGroup = () => {
	const handleCardClick = (e) => {
		const parent = (e.target.tagName !== 'SPAN') ?
			e.target : e.target.parentNode
		parent.classList.add('card-selected')
	}

	return (
		<div>
			<CardQuestion />
			<div className="container">
				<Card click={handleCardClick} />
				<Card click={handleCardClick} />
				<Card click={handleCardClick} />
				<Card click={handleCardClick} />
			</div>
		</div>
	)
}

export default CardGroup