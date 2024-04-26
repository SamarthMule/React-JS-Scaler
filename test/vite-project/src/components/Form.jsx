import React, {useState} from 'react'

function Form() {
    // const [text, setText] = useState('')
    // function handleChange(e){
    //     setText(e.target.value)
    //     console.log(e)
    // }
    const [name, setName] = useState(
        {firstName: '', lastName: ''}
    )
    function handleSumit(e) {
      e.preventDefault()
      console.log(name)
    }
  return (
    <div>
    <form>
        {/* <input onChange={handleChange} type='text' value={text} /> */}
        {/* <input onChange={(e) => setText(e.target.value)} type='text' value={text} /> */}
        <label>First Name</label><br/>
        <input onChange={(e) => setName({...name, firstName : e.target.value})} type='text' /><br/>
        <label>Last Name</label><br/>
        <input onChange={(e) => setName({...name, lastName : e.target.value})} type='text' />
        <button onClick={(e) => handleSumit(e)}>Sumit</button>
    </form>
    </div>
  )
}

export default Form
