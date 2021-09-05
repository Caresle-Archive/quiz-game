import './Card.css'

const Card = ({cards}) => {
  const classes = (cards !== undefined) ? 
    `card ${cards}` : "card"
  return (
    <div className={classes}>
      <span>A)</span>
      Some text
    </div>
  )
}

export default Card