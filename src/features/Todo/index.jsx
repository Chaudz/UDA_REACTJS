import React, { useState } from 'react';
import TodoList from './components/TodoList';

const initTodoList = [
  { id: 1, title: 'Eat', status: 'new' },
  { id: 2, title: 'Sleep', status: 'new' },
  { id: 3, title: 'Code', status: 'new' },
];

function Todo(props) {
  const [todoList, setTodoList] = useState(initTodoList);
  const handleToDoClick = (todo, idx) => {
    console.log(todo);
    const newTodoList = [...todoList];
    console.log(todoList);
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h1>Todo</h1>
      <TodoList todoList={todoList} onToDoClick={handleToDoClick} />
    </div>
  );
}

export default Todo;
