import './App.css'
import CardQuestion from './components/CardQuestion'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <h1>Quiz Game</h1>
      <div>
        <CardQuestion />
        <div className="container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default App
