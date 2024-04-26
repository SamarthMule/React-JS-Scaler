import React from 'react'
import Child from './Child'

function Parent({message}) {
  return (
    <div className='parent'>
      <h1>Parent <br/> {message.familyName} </h1>
        <Child message= {message} />
    </div>
  )
}

export default Parent
