import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const TodoTitleOrModifyInput = ({ todoItem }) => {
  const dispatch = useDispatch();

  const onModifyInput = (event) => {
    todoItem.todoTitle = event.target.value;
  };

  const onKeyEnter = (event) => {
    if (event.key === 'Enter') {
      dispatch({
        type: 'todoUpdate',
        payload: {
          ...todoItem,
          modify: false,
        },
      });
    }
  };

  return (
    <>
      {todoItem.modify === true ? (
        <input
          type='text'
          onChange={(event) => onModifyInput(event)}
          onKeyDown={(event) => onKeyEnter(event)}
        />
      ) : (
        <>{todoItem.todoTitle}</>
      )}
    </>
  );
};

TodoTitleOrModifyInput.propTypes = {
  todoItem: PropTypes.object.isRequired,
};

export default TodoTitleOrModifyInput;
