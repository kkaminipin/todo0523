import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import TodoTitleOrModifyInput from '../TodoTitleOrModifyInput';
import TodoItemButton from '../TodoItemButton';

import btnModify from '../../assets/images/btn_modify.png';
import btnDelete from '../../assets/images/btn_delete.png';

const TodoItem = ({ todoItem, index }) => {
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todoItems);

  const onModifyBtn = () => {
    if (todoItem.modify === false) {
      todoItem.modify = true;
    } else {
      todoItem.modify = false;
    }
    dispatch({ type: 'todoReDraw', payload: todoItems });
  };

  const onDeleteBtn = () => {
    const newTodo = todoItems.filter((item) => {
      if (item !== todoItem) {
        return item;
      }
    });
    dispatch({ type: 'todoReDraw', payload: newTodo });
  };

  // 첫번째로 실행됨
  const todoItemStatusChangeBtn = (todoItem) => {
    let status = getNextState(todoItem.status); // 클릭한 버튼의 다음 상태값을 담는다.
    dispatch({ type: 'todoUpdate', payload: { ...todoItem, status } }); // 변경된 상태값의 todoItem을 redux todoUpdate로 보낸다.
  };

  // 두번째로 실행됨
  const getNextState = (status) => {
    switch (status) {
      case '미진행':
        return '진행중';
      case '진행중':
        return '완료';
      case '완료':
        return '미진행';
      default:
        return '';
    }
  };

  // 세번째로 실행됨
  const getProgressClassNames = (status) => {
    switch (status) {
      case '미진행':
        return 'status-btn--not-progressed';
      case '진행중':
        return 'status-btn--ongoing';
      case '완료':
        return 'status-btn--completion';
    }
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <button
          className={`status-btn ${getProgressClassNames(todoItem.status)}`}
          onClick={() => {
            todoItemStatusChangeBtn(todoItem);
          }}
        >
          <span className='blind'>{todoItem.status}</span>
        </button>
      </td>
      <td>
        <TodoTitleOrModifyInput todoItem={todoItem} onModifyBtn={onModifyBtn} />
      </td>
      <td>
        <TodoItemButton className={'btn--modify'} eventFunction={onModifyBtn} imgName={btnModify} imgAlt={'수정'} />
        <TodoItemButton className={'btn--del'} eventFunction={onDeleteBtn} imgName={btnDelete} imgAlt={'삭제'} />
      </td>
    </tr>
  );
};

TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default TodoItem;
