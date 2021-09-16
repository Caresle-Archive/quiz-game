import { useState, useEffect } from 'react'
import './App.css'

// Import components
import CardGroup from './components/cards/CardGroup'
import NextQuestion from './components/NextQuestion'
import ScoreManager from './components/score/ScoreManager'

const url = 'http://localhost:3001/api/v1/questions'

const App = () => {
  // States
  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(-1)
  const [scoreRender, setScoreRender] = useState(false)
  const [scoreValue, setScoreValue] = useState(0)
  let render
  
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setQuestions([...data]))
      .then(() => setCurrentQuestion(0))
  }, [])

  const nextQuestion = (e) => {
    let actualQuestion = currentQuestion
    
    const cards = document.querySelectorAll('.card-group')
    cards.forEach(ele => {
      if (ele.classList.contains('card-correct')) {
        setScoreValue(scoreValue + 1)
      }
      ele.classList.replace('card-disable', 'card')
      ele.classList.replace('card-correct', 'card')
      ele.classList.replace('card-bad', 'card')
    })

    if (actualQuestion + 1 <= questions.length - 1) {
      setCurrentQuestion(actualQuestion + 1)
      e.target.classList.add('btn-disabled')
    } else {
      console.log('There is no more questions')
      setScoreRender(true)
    }
  }
  
  if (currentQuestion < 0 && !scoreRender) {
    render = <h1>Loading question</h1>
  } else if (!scoreRender){
    render = (
      <div>
        <h1>Quiz Game</h1>
        <CardGroup questions={questions} current={currentQuestion}/>
        <NextQuestion nextQuestion={nextQuestion} />
      </div>
    )
  } else {
    render = <ScoreManager scoreValue={scoreValue} />
  }
  return render
}

export default App
