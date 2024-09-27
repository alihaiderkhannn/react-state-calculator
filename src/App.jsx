import { useState } from "react"
import "./App.css"

function App() {

  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [operation, setOperation] = useState(null)
  const [result, setResult] = useState(null)

  const numberclick1 = (num) => {
    setFirstNumber((prev) => prev === 0 ? num : prev + num)
  }

  const numberclick2 = (num) => {
    setSecondNumber((prev) => prev === 0 ? num : prev + num)
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

  const clear = () => {
    setFirstNumber(0);
    setSecondNumber(0)

  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
          
    
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map(number => (
            <button key={number} onClick={() => numberclick1(number)}>{number}</button>

            // key is important in react for identif
          ))}

          <button onClick={() => clear()}>Clear</button>
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
          

          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map(number => (
            <button key={number} onClick={() => numberclick2(number)}>{number}</button>
          ))}

          
          <button onClick={() => clear()}>Clear</button>

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
