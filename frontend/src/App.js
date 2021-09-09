import './App.css'
import CardGroup from './components/CardGroup'
import NextQuestion from './components/NextQuestion'
import { useState, useEffect } from 'react'

const url = 'http://localhost:3001/api/v1/questions'

const App = () => {
  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(-1)

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
      ele.classList.replace('card-disable', 'card')
      ele.classList.replace('card-correct', 'card')
      ele.classList.replace('card-bad', 'card')
    })
    if (actualQuestion + 1 <= questions.length - 1) {
      setCurrentQuestion(actualQuestion + 1)
    } else {
      console.log('There is no more questions')
    }
    e.target.classList.add('btn-disabled')
  }
  
  if (currentQuestion < 0) {
    return <h1>Loading question</h1>
  } else {
    return (
      <div>
        <h1>Quiz Game</h1>
        <CardGroup questions={questions} current={currentQuestion}/>
        <NextQuestion nextQuestion={nextQuestion} />
      </div>
    )
  }
}

export default App
