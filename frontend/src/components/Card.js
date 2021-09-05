import './Card.css'

const Card = ({cards, click}) => {
  const classes = (cards !== undefined) ? 
    `card ${cards}` : "card"
  return (
    <div className={classes} onClick={click}>
      <span>A)</span>
      Some text
    </div>
  )
}

export default Card