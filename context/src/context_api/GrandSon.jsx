import React from 'react'
import { useContext } from 'react'
import { FamilyContext } from './familyContext'

function GrandSon() {
  const message = useContext(FamilyContext)
  return (
    <div className='dson'>
      <h3>GrandSon <br/> {message.familyName} </h3>
    </div>
  )
}

export default GrandSon
