import { useState } from "react"
import "./App.css"

function App() {

  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState('')
  const [operation, setOperation] = useState(null)
  const [result, setResult] = useState(null)

  const numberclick1 = (num) => {
    setFirstNumber(num)
  }

  const numberclick2 = (num) => {
    setSecondNumber(num)
  }

  
  const operationclick = (operation) => {
    setOperation(operation)
  }

  const handleAnswerClick = () => {
    if(!isNaN(firstNumber) && (!isNaN(secondNumber) && operation !== null)) {
        
        const number1 = parseFloat(firstNumber)
        const number2 = parseFloat(secondNumber)
      

    let result = 0;

    switch(operation){
      case '+':
      result = number1 + number2
      break;
      case '-':
      result = number1 - number2
      break;
      case '*':
      result = number1 * number2
      break;
      case '÷':
      result = number1 / number2
      break;
      default:
      return;
    }

    setResult(result)

    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
          <button onClick={() => numberclick1(1)}>1</button>
          <button onClick={() => numberclick1(2)}>2</button>
          <button onClick={() => numberclick1(3)}>3</button>
          <button onClick={() => numberclick1(4)}>4</button>
          <button onClick={() => numberclick1(5)}>5</button>
          <button onClick={() => numberclick1(6)}>6</button>
          <button onClick={() => numberclick1(7)}>7</button>
          <button onClick={() => numberclick1(8)}>8</button>
          <button onClick={() => numberclick1(9)}>9</button>
          <button onClick={() => numberclick1(0)}>0</button>
          <button onClick={() => numberclick1(0) }>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button onClick={() => operationclick('+')}>+</button>
          <button onClick={() => operationclick('-')}>-</button>
          <button onClick={() => operationclick('*')}>*</button>
          <button onClick={() => operationclick('÷')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers">
          <button onClick={() => numberclick2(1)}>1</button>
          <button onClick={() => numberclick2(2)}>2</button>
          <button onClick={() => numberclick2(3)}>3</button>
          <button onClick={() => numberclick2(4)}>4</button>
          <button onClick={() => numberclick2(5)}>5</button>
          <button onClick={() => numberclick2(6)}>6</button>
          <button onClick={() => numberclick2(7)}>7</button>
          <button onClick={() => numberclick2(8)}>8</button>
          <button onClick={() => numberclick2(9)}>9</button>
          <button onClick={() => numberclick2(0)}>0</button>
          <button onClick={() => numberclick2(0)}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={(handleAnswerClick)}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
