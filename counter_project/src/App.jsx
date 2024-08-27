import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(4)


  //let counter = 4;

  const addValue = () =>{
    if (counter< 7){
      setCounter(counter + 1);
    }
  }

  const removeValue = () => {
    if (counter >0){
      setCounter(counter - 1);
    }
   }



  return (
    <> 
    <h1>COUNTER PROJECT</h1>

    <h3>Counter value: {counter} </h3>

    <button onClick={addValue}>Add value</button><br />
    <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
