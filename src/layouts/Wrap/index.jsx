import Header from '../Header';
import Body from '../Body';
import Footer from '../Footer';

import './styles/style.css';

const Wrap = () => {
  return (
    <div className='wrap'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Wrap;
