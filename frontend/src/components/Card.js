import './Card.css'


const Card = ({cards, click, answer, correct}) => {
  const classes = (cards !== undefined) ? 
    `card ${cards}` : "card"

    return (
    <div className={classes} onClick={e => click(e, correct)}>
      <span></span>
      {answer}
    </div>
  )
}

export default Card