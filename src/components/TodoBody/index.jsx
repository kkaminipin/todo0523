import { Outlet } from 'react-router-dom';
import TodoItems from '../TodoItems';
import './styles/style.css';

const TodoBody = () => {
  return (
    <div className='todo__body'>
      <table className='todo__table'>
        <colgroup>
          <col width={50} />
          <col width={50} />
          <col width={'auto'} />
          <col width={200} />
        </colgroup>
        <tbody>
          <TodoItems />
          <Outlet></Outlet>
        </tbody>
      </table>
    </div>
  );
};

export default TodoBody;
