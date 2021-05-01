import React from 'react'
import ListItem from './ListItem'

function List(props) {

    return (
      <ul>
          {props.itens.map(item => <ListItem key={item.id} item={item} OnClickProps={props.OnClickProps} onDeleteList={props.onDeleteList}></ListItem>)}
      </ul>)
  
}

export default List