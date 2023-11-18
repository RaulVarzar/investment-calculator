import './App.css';
import { useState } from "react"
import Form from "./components/Form"
import Table from "./components/Table"
import styles from "./index.css"


export default function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000, 
    annualInvestment: 1200, 
    expectedReturn: 6, 
    duration:20
  })

  const isValid = userInput.duration >= 1;

  function handleInput(inputId, newValue) {
    setUserInput(prevUserInput => {
      return{
        ...prevUserInput,
        [inputId] : +newValue
      }
    });
  }


  return (
        <main className='h-screen p-16'> 
            <Form onChange={handleInput} userInput={userInput}/>
            {isValid  ? 
              <Table userInput={userInput}/> 
              : 
              <h3 className="text-red-300 center">Enter a duration greater than 0</h3>
            }    
        </main>
  )
}