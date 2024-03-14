import { useState } from 'react'
import './App.css'

function App() {
  const  [inputValue, setInputValue] = useState('') // Состояние input'а
  const changeValue = (e) => {setInputValue(e.target.value)} // Изменение value в input
  const [elementList, setElementList] = useState([]) // Для массива

  // Создание нового элемента, добавление его в массив, а также очищение input
  const newItemElementGenerate = () => { 
  const newElement =  <div key={elementList.length} className="container-item-list">  <p className="text-todo">{inputValue}</p> <label htmlFor='custom-checkbox'><input type="checkbox" className='custom-checkbox' /></label></div>;
  setElementList([...elementList, newElement])
  setInputValue('')
  }

  // Нахождение родительского элемента с опеределенным классом при нажатии на кнопку, чтобы его удалить 
  const deleteElement = (e) => {
    const parentDiv = e.target.closest('.container-parent-item');
    const parentId = parseInt(parentDiv.getAttribute('data-id'));
    setElementList(elementList.filter((el, idx) => idx !== parentId));
  };

  return (
    <>
      <div className="container">
        <h1 className="title">Todo List</h1>
        <div className="add-todo">
          <input type="text" className="input-todo" placeholder='Add Todo...' value={inputValue} onChange={changeValue}/>
          <button className="button-add" onClick={newItemElementGenerate}>Добавить</button>
          <h2 className="title-list-todo">To Do List</h2>

          {elementList.map((element, index) => (
            <div key={index} className='container-parent-item' data-id={index}>
              {element}
              <button className="delete-button-item-list-todo" onClick={deleteElement}>Удалить</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
