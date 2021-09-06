import './App.css'
import CardGroup from './components/CardGroup'
import { useState, useEffect } from 'react'

const url = 'http://localhost:3001/api/v1/questions'

const App = () => {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setQuestions([...data]))
  }, [])

  return (
    <div>
      <h1>Quiz Game</h1>
      <CardGroup />
    </div>
  )
}

export default App
