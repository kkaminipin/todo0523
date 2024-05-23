import { Outlet } from 'react-router-dom';
import './styles/style.css';

const Body = () => {
  return (
    <>
      <div className='body'>
        <Outlet />
      </div>
    </>
  );
};

export default Body;
