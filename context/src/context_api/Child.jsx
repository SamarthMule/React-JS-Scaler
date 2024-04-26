import React from 'react'
import GrandSon from './GrandSon'
import GrandDaughter from './GrandDaughter'
import { useContext } from 'react'
import { FamilyContext } from './familyContext'

function Child() {
  const message = useContext(FamilyContext)
  return (
    <div className='child'>
      <h2>Child <br/> {message.familyName} </h2>
      <GrandSon />
      <GrandDaughter />
    </div>
  )
}

export default Child
