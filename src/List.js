import React from 'react'


function List(props) {

    return (
      <ul>
          {props.itens.map(item => <li key={item.id} className={item.done?"done":""}>
          {item.text}
          <button onClick={() => { props.OnClickProps(item)}}>✔</button>
          <button onClick={() => { props.onDeleteList(item) }}>X</button>
          </li>)}
      </ul>)
  
}

export default List