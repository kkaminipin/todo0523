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

  const onStatusChangeBtn = (todoItem) => {
    let status = getNextState(todoItem.status);
    dispatch({ type: 'todoUpdate', payload: { ...todoItem, status } });
  };

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
            onStatusChangeBtn(todoItem);
          }}
        >
          <span className='blind'>{todoItem.status}</span>
        </button>
      </td>
      <td>
        <TodoTitleOrModifyInput todoItem={todoItem} onModifyBtn={onModifyBtn} />
      </td>
      <td>
        <TodoItemButton
          className={'btn--modify'}
          eventFunction={onModifyBtn}
          imgName={btnModify}
          imgAlt={'수정'}
        />
        <TodoItemButton
          className={'btn--del'}
          eventFunction={onDeleteBtn}
          imgName={btnDelete}
          imgAlt={'삭제'}
        />
      </td>
    </tr>
  );
};

TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default TodoItem;
