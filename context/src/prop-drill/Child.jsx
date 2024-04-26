import React from 'react'
import GrandSon from './GrandSon'
import GrandDaughter from './GrandDaughter'

function Child({message}) {
  return (
    <div className='child'>
      <h2>Child<br/> {message.familyName} </h2>
      <GrandSon message={message} />
      <GrandDaughter message={message} />
    </div>
  )
}

export default Child
