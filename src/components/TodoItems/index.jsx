import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem';

import './styles/style.css';
import { useEffect } from 'react';
import { useState } from 'react';

const TodoItems = () => {
  const todoItems = useSelector((state) => state.todoItems);
  const todoStatus = useSelector((state) => state.status);
  const [todos, setTodos] = useState(todoItems);
  useEffect(() => {
    const newTodos = todoItems.filter((item) => item.status === todoStatus);
    setTodos(newTodos);
  }, [todoItems, todoStatus]);
  return (
    <>
      {todos.map((todoItem, index) => {
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
