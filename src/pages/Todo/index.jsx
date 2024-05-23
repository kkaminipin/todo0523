import TodoHeader from '../../components/TodoHeader';
import TodoBody from '../../components/TodoBody';
import Aside from '../../layouts/Aside';
import './styles/style.css';
import Pagination from '../../components/Pagination';
import { useParams } from 'react-router-dom';

const Todo = () => {
  return (
    <>
      {/* <Aside /> */}
      <main className='main'>
        <div className='todo'>
          <TodoHeader />
          <TodoBody />
          <Pagination />
        </div>
      </main>
    </>
  );
};

export default Todo;
