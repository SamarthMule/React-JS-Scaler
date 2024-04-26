import {React, useState, useRef} from 'react'

function UseRef() {
    const [name, setName] = useState('')
    const refElement = useRef('')
    const clear = () => {
        setName('')
        refElement.current.focus()
    }
    const changeColor = () => {
        refElement.current.style.color = 'yellow'
    }
  return (
    <div>
      <h1>useRef Hook</h1>
      <input ref={refElement} type='text' value={name} onChange={e => setName(e.target.value)} />
      <button onClick={clear}>Clear</button>
      <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default UseRef
