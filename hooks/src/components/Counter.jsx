import React from 'react'
import { useState, useMemo } from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }   
    const isEven = useMemo(() => { 
        for (let i = 0; i < 2000000000; i++);
        return counterOne % 2 === 0
    }, [counterOne])

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Counter One - {counterOne} </button><br/>
        <span>{isEven ? 'Even' : 'Odd'}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Counter Two - {counterTwo} </button>
      </div>
    </div>
  )
}

export default Counter
