import React from 'react'

function Button({handleClick , value}) {
  return (
    <div>
        {console.log(`Rendering button - ${value}`)}
      <button onClick={handleClick}> {value} </button>
    </div>
  )
}

export default React.memo(Button)
