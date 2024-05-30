import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import StatusButton from '../StatusButton';
import './styles/style.css';
import { useEffect } from 'react';

const TodoHeader = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const [statusList, setStatusList] = useState({});
  const dispatch = useDispatch();

  const statusBtnSelect = document.querySelectorAll('.todo__status-btn .status-btn');
  statusBtnSelect.forEach((item) => {
    item.classList.remove('active');
  });

  const todoItems = useSelector((state) => state.todoItems);

  useEffect(() => {
    const newStatusList = {};
    todoItems.forEach((todoItem) => {
      switch (todoItem.status) {
        case '미진행':
          newStatusList['status-btn--not-progressed'] = true;
          // setStatusList({ 'status-btn--not-progressed': true });
          //이런식으로 setState로 객체를 변경하지는 못하는지
          break;
        case '진행중':
          newStatusList['status-btn--ongoing'] = true;
          // setStatusList({ 'status-btn--ongoing': true });
          break;
        case '완료':
          newStatusList['status-btn--completion'] = true;
          // setStatusList({ 'status-btn--completion': true });
          break;
      }
    });
    // console.log('statusList : ', statusList);
    setStatusList(newStatusList);
  }, [todoItems]);

  const onKeyEnter = (event) => {
    if (event.key === 'Enter') {
      dispatch({ type: 'todoCreate', payload: '미진행' }); // 240530 수정
      setTodoTitle('');
    }
  };

  const onCreateInput = (event) => {
    setTodoTitle(event.target.value);
    dispatch({ type: 'todoTitle', payload: event.target.value });
  };

  const all = () => {
    dispatch({ type: 'todoAll' });
  };

  return (
    <header className='todo__header'>
      <div className='todo__header-content'>
        <div className='todo__status-btn'>
          {/* <TodoStatus />/ 변경하기 240523 */}
          <StatusButton statusList={statusList} className={'status-btn--not-progressed'} status={'미진행'} />
          <StatusButton className={'status-btn--ongoing'} status={'진행중'} statusList={statusList} />
          <StatusButton className={'status-btn--completion'} status={'완료'} statusList={statusList} />
          <button type='button' className='status-btn status-btn--all' onClick={all}>
            <span className='blind'>전체</span>
          </button>
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
