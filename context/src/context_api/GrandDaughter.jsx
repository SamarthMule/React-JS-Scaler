import React from 'react'
import { useContext } from 'react'
import { FamilyContext } from './familyContext'

function GrandDaughter() {
  const message = useContext(FamilyContext)
  return (
    <div className='gdaughter'>
      <h3>GrandDaughter <br/> {message.familyName} </h3>
    </div>
  )
}

export default GrandDaughter
