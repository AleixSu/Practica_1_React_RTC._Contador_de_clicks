import React from 'react'
import './App.css'
import Button from './components/Button/Button'
import ShowCount from './components/ShowCount/ShowCount'

function App() {
  const [countNum, setCountNum] = React.useState(0)
  console.log()
  return (
    <div className='App'>
      {<ShowCount countNum={countNum} className='showCount' />}
      <div className='buttonsDiv'>
        <Button
          className='restarButton'
          buttonText='Restar'
          onClick={() => setCountNum(countNum - 1)}
        />
        <Button
          className='sumarButton'
          buttonText='Sumar'
          onClick={() => setCountNum(countNum + 1)}
        />
      </div>
    </div>
  )
}

export default App
