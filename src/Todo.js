import { useEffect, useState } from "react"
import "./Todo.css"
import List from "./components/List"
import FormList from "./components/FormList"
import Item from "./components/Item"

const SAVED_ITENS = "savedItens"

function Todo() {
  const [itens, setItens] = useState([])

  useEffect(() => {
    let savedItens = JSON.parse(localStorage.getItem(SAVED_ITENS))
    if(savedItens) {
      setItens(savedItens)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(SAVED_ITENS, JSON.stringify(itens))
  }, [itens])
  
  function onAddItem(texto) {
    const item = new Item(texto)
    setItens([...itens, item])
    
  }

  function doneListzim(item) {
    const updateItem = itens.map((it) => {
      if(it.id === item.id) {
        it.done = !it.done
      }
      return it
    })

    setItens(updateItem)
  }

  function onDeleteList(item) {
    const filterList = itens.filter(it => it.id !== item.id)
    setItens(filterList)
  }

  return (
    <div className="container">
      <h1>Todo React</h1>
      <FormList addItem={onAddItem}> </FormList>
      <List OnClickProps={doneListzim} onDeleteList={onDeleteList} itens={itens} ></List>
    </div>
  )
}




export default Todo