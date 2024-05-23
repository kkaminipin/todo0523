import { useSelector, useDispatch } from 'react-redux';

import './styles/style.css';
const StatusButtons = () => {
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todoItems);

  const onShowOnlyClickedStatusBtn = (event, status) => {
    event.target.classList.toggle('active');
    const newTodo = todoItems.filter((todoItem) => todoItem.status === status);
    dispatch({ type: 'todoReDraw', payload: newTodo });
  };

  return (
    <>
      <button
        type='button'
        className='status-btn status-btn--not-progressed'
        onClick={(event) => onShowOnlyClickedStatusBtn(event, '미진행')}
      >
        <span className='blind'>미진행</span>
      </button>
      <button
        type='button'
        className='status-btn status-btn--ongoing'
        onClick={(event) => onShowOnlyClickedStatusBtn(event, '진행중')}
      >
        <span className='blind'>진행중</span>
      </button>
      <button
        type='button'
        className='status-btn status-btn--completion'
        onClick={(event) => onShowOnlyClickedStatusBtn(event, '완료')}
      >
        <span className='blind'>완료</span>
      </button>
    </>
  );
};

export default StatusButtons;
