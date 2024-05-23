import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem';

import './styles/style.css';

const TodoItems = () => {
  const todoItems = useSelector((state) => state.todoItems);

  return (
    <>
      {todoItems.map((todoItem, index) => {
        return (
          <React.Fragment key={index}>
            <TodoItem todoItem={todoItem} index={index} />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default TodoItems;
