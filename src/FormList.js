import React, {useState} from 'react'

function FormList(props) {
  const [text, setText] = useState("")

  function handleChange(event) {
    const inputText = event.target.value
    setText(inputText)
  }

  function handleClick(event) {
    event.preventDefault()
    if(text) {
      props.addItem(text)
      setText("")
    }
    
  }

  return (
    <form action="">
      <input onChange={handleChange} type="text" value={text}/>
      <button onClick={handleClick}>Add</button>
    </form>
  )
}

export default FormList