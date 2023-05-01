import React, {useState, useEffect, useRef} from "react"
import useWordGame from "./hooks/useWordGame"
import './style.css'

function App() {
 
  const [time,setTime] = useState(20)

    const {
        textBoxRef, 
        handleChange, 
        text, 
        isTimeRunning, 
        timeRemaining, 
        startGame, 
        setTimeRemaining,
        wordCount
    } = useWordGame(time)

   
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <input 
            name="time"
             type="number" 
             placeholder="enter test time"
             onChange={(e)=>{setTime(e.target.value)}}
             disabled={isTimeRunning}
              /> 
             <button
              onClick={()=> time>0 && setTimeRemaining(time)}
              disabled={isTimeRunning}
              className="set"
             > set Time</button>
           
            <h4>Time remaining: {timeRemaining}</h4>
            <button 
                onClick={startGame}
                disabled={isTimeRunning}
            >
                Start
            </button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default App

