import './CardQuestion.css'

const CardQuestion = ({ question }) => {
  return (
    <div className="card-question">
      <h2>{question}</h2>
    </div>
  )
}

export default CardQuestion