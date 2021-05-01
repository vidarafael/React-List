import React from 'react';
import Card from './Card'

function ListItem(props) {

    return (<li>
            <Card className={props.item.done?"done item": "item"}>
                {props.item.text}
                <div>
                    <button onClick={() => { props.OnClickProps(props.item)}}>✔</button>
                    <button onClick={() => { props.onDeleteList(props.item) }}>❌</button>
                </div>
            </Card>
          </li>)
}
  


export default ListItem