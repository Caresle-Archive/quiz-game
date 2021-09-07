import './App.css'
import CardGroup from './components/CardGroup'
import { useState, useEffect } from 'react'

const url = 'http://localhost:3001/api/v1/questions'

const App = () => {
  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setQuestions([...data]))
  }, [])

  const nextQuestion = () => {
    setCurrentQuestion(0)
    console.log('hola')
  }

  return (
    <div>
      <h1>Quiz Game</h1>
      <CardGroup questions={questions} current={currentQuestion}/>
      <div id="button-container">
        <button className="btn btn-disabled" onClick={nextQuestion}>Continue</button>
      </div>
    </div>
  )
}

export default App
