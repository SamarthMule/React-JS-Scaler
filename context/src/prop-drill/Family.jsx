import React from 'react'
import Parent from './Parent'

function Family({message}) {
  return (
    <div className='family'>
        <h1>Family 1 <br/> Using Prop-drill</h1>
      <Parent message = {message} />
    </div>
  )
}

export default Family
