import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import StatusButton from '../StatusButton';
import './styles/style.css';

const TodoHeader = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const dispatch = useDispatch();

  const statusBtnSelect = document.querySelectorAll(
    '.todo__status-btn .status-btn'
  );
  statusBtnSelect.forEach((item) => {
    item.classList.remove('active');
  });

  const todoItems = useSelector((state) => state.todoItems);
  todoItems.forEach((todoItem) => {
    switch (todoItem.status) {
      case '미진행':
        document
          .querySelector('.status-btn--not-progressed')
          .classList.add('active');
        break;
      case '진행중':
        document.querySelector('.status-btn--ongoing').classList.add('active');
        break;
      case '완료':
        document
          .querySelector('.status-btn--completion')
          .classList.add('active');

        break;
    }
  });

  const onKeyEnter = (event) => {
    if (event.key === 'Enter') {
      dispatch({ type: 'todoCreate' });
      setTodoTitle('');
    }
  };

  const onCreateInput = (event) => {
    setTodoTitle(event.target.value);
    dispatch({ type: 'todoTitle', payload: event.target.value });
  };

  return (
    <header className='todo__header'>
      <div className='todo__header-content'>
        <div className='todo__status-btn'>
          <StatusButton
            className={'status-btn--not-progressed'}
            status={'미진행'}
          />
          <StatusButton className={'status-btn--ongoing'} status={'진행중'} />
          <StatusButton className={'status-btn--completion'} status={'완료'} />
        </div>
        <div className='todo__input-create'>
          <h2 className='titel todo__title'>To Do Lists</h2>
          <input
            type='text'
            className='input-create'
            placeholder='Add your todos...'
            onChange={onCreateInput}
            onKeyDown={onKeyEnter}
            value={todoTitle}
          />
        </div>
      </div>
    </header>
  );
};

export default TodoHeader;
