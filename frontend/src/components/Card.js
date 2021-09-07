import './Card.css'

const Card = ({cards, click, answer}) => {
  const classes = (cards !== undefined) ? 
    `card ${cards}` : "card"
  return (
    <div className={classes} onClick={click}>
      <span></span>
      {answer}
    </div>
  )
}

export default Card