import React from 'react'
import Card from './Card'

function List(props) {

    return (
      <ul>
          {props.itens.map(item => <li key={item.id}>
            <Card className={item.done?"done item": "item"}>
                {item.text}
                <div>
                    <button onClick={() => { props.OnClickProps(item)}}>✔</button>
                    <button onClick={() => { props.onDeleteList(item) }}>❌</button>
                </div>
            </Card>
          </li>)}
      </ul>)
  
}

export default List