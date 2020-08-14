import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function Tasks() {
  const [todoName, setTodo] = useState({ todo: "", listOfTodo: []});

  const submitTodo = () => {
    const arrayOfToDos = todoName.listOfTodo.push({
      todo: todoName.todo
      , isDone: false
    })
   
  }

  const onSubmit = e => {
    e.preventDefault();
    console.log(todoName)

  }

  return (
    <div>
      <form onSubmit={e => onSubmit(e)}>
        <input type='text' onChange={e => setTodo({ ...todoName, [e.target.value]: e.target.value })}/>
        <input type='submit' onClick={submitTodo}/>
      {todoName.listOfTodo.map(todo => (<div
        key={todo}>
        <div style={{ display: "flex" }}>
          <h2>{todo.name}</h2>
    
        </div>
      </div>))}
      </form>
      
    </div>
  )
}

export default Tasks;