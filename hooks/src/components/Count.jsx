import React from 'react'

function Count({text, count}) {
  return (
    <div>
        {console.log('Rendering Count -')}
      {text} : {count}
    </div>
  )
}

export default React.memo(Count)
