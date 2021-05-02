import { useEffect, useState } from "react"
import "./Todo.css"
import List from "./components/List"
import FormList from "./components/FormList"
import Item from "./components/Item"
import Modal from "./components/Modal"

const SAVED_ITENS = "savedItens"

function Todo() {
  const [itens, setItens] = useState([])

  const [showModal, setShowModal] = useState(false)


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
    onHideModal()
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

  function onHideModal(e) {
    setShowModal(false)
  }

  return (
    <div className="container">
      <header className="header"><h1>Todo React</h1> <button onClick={()=> { setShowModal(true)}} className="addButton">+</button></header>
      <List OnClickProps={doneListzim} onDeleteList={onDeleteList} itens={itens} ></List>
      <Modal show={showModal} onHideModal={onHideModal}>
        <FormList addItem={onAddItem}> </FormList>
      </Modal>
    </div>
  )
}




export default Todo