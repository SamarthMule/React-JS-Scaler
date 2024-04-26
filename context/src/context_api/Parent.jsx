import React from 'react'
import Child from './Child'
import {FamilyContext} from './familyContext'
import { useContext } from 'react'

function Parent() {
  const message = useContext(FamilyContext)
  return (
    <div className='parent'>
      <h1>Parent <br/> {message.familyName} </h1>
        <Child />
    </div>
  )
}

export default Parent
