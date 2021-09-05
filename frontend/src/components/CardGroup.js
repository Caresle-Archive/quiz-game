import CardQuestion from './CardQuestion'
import Card from './Card'

import './CardGroup.css'

const CardGroup = () => {
	return (
		<div>
			<CardQuestion />
			<div className="container">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	)
}

export default CardGroup