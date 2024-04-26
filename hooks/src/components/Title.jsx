import React from 'react'

function Title() {
  return (
    
    <div>
        {console.log('Rendering Title - ')}
      <h1>Use Callback Hook</h1>
    </div>
  )
}

export default React.memo(Title)
