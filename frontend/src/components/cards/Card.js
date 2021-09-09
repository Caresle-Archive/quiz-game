import './Card.css'


const Card = ({cards, click, answer, correct}) => {
  const classes = (cards !== undefined) ? 
    `card card-group ${cards}` : "card card-group"

    return (
    <div className={classes} onClick={e => click(e, correct)}>
      <span></span>
      {answer}
    </div>
  )
}

export default Card