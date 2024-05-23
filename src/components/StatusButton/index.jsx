import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import './styles/style.css';

const StatusButton = ({ className, status }) => {
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todoItems);

  const onShowOnlyClickedStatus = (event) => {
    event.target.classList.toggle('active');
    statusFilterOut();
  };

  const statusFilterOut = () => {
    const selectedStatus = todoItems.filter(
      (todoItem) => todoItem.status === status
    );

    dispatch({ type: 'todoSave', payload: status });

    // switch (status) {
    //   case '미진행':
    //     return dispatch({ type: 'todoNotProgressed', payload: selectedStatus });
    //   case '진행중':
    //     return dispatch({ type: 'todoOngoing', payload: selectedStatus });
    //   case '완료':
    //     return dispatch({ type: 'todoCompletion', payload: selectedStatus });
    // }
  };

  return (
    <button
      className={`status-btn ${className}`}
      onClick={(event) => onShowOnlyClickedStatus(event)}
    >
      <span className='blind'>{status}</span>
    </button>
  );
};

StatusButton.propTypes = {
  className: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default StatusButton;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import './styles/style.css';

// const StatusButton = ({ className, status }) => {
//   const dispatch = useDispatch();
//   const todoItems = useSelector((state) => state.todoItems);

//   const notProgressed = todoItems.filter(
//     (todoItem) => todoItem.status === '미진행'
//   );
//   const ongoing = todoItems.filter((todoItem) => todoItem.status === '진행중');
//   const completion = todoItems.filter((todoItem) => todoItem.status === '완료');

//   const onShowOnlyClickedStatus = (event) => {
//     const status = event.target.children[0].innerHTML;
//     event.target.classList.toggle('active');

//     dispatch({ type: 'todoNotProgressed', payload: notProgressed });
//     dispatch({ type: 'todoOngoing', payload: ongoing });
//     dispatch({ type: 'todoCompletion', payload: completion });

//     switch (status) {
//       case '미진행':
//         dispatch({ type: 'todoReDraw', payload: notProgressed });
//         break;
//       case '진행중':
//         dispatch({ type: 'todoReDraw', payload: ongoing });
//         break;
//       case '완료':
//         dispatch({ type: 'todoReDraw', payload: completion });
//         break;
//     }
//   };

//   const onShowEveryStatus = () => {
//     console.log(test);
//   };

//   return (
//     <button
//       className={`status-btn ${className}`}
//       onClick={(event) => onShowOnlyClickedStatus(event)}
//     >
//       <span className='blind'>{status}</span>
//     </button>
//   );
// };

// StatusButton.propTypes = {
//   className: PropTypes.string.isRequired,
//   status: PropTypes.string.isRequired,
// };

// export default StatusButton;
