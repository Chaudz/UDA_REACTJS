import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

TodoList.prototype = {
  todoList: PropTypes.array,
  onToClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onToDoClick: null,
};

TodoList.defaultProps = {};

function TodoList({ todoList, onToDoClick }) {
  const handleToDoClick = (todo, idx) => {
    onToDoClick(todo, idx);
  };
  return (
    <div>
      <ul>
        {todoList.map((todo, idx) => (
          <li key={todo.id} className={todo.status} onClick={() => handleToDoClick(todo, idx)}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
