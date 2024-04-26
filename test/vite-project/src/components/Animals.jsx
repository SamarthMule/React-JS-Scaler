import React from 'react'

function Animals() {
    let animals = ['Dog','Cat','Lion','Tiger','Elephant']
  return (
    <div>
        <ol>
      {/* {animals} */}
        {animals.map((animal) => (
            <li>{animal}</li>
        ))}
        </ol>
    </div>
    )
}

export default Animals
