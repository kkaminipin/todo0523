import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './styles/style.css';
import { useState } from 'react';
import { useEffect } from 'react';

const StatusButton = ({ className, status, statusList }) => {
  const dispatch = useDispatch();
  const [addActive, SetAddactive] = useState('');

  const onShowClickedStatus = () => {
    dispatch({ type: 'getStatus', payload: status });

    const activeBoolean = addActive === 'active' ? '' : 'active';
    SetAddactive(activeBoolean);
    // console.log('addActive : ', addActive);
    dispatch({ type: 'todoSave', payload: status });

    // switch (status) {
    //   case '미진행':
    //     console.log('미진행');
    //     break;
    //   case '진행중':
    //     console.log('진행중');
    //     break;
    //   case '완료':
    //     console.log('완료');
    //     break;
    // }
  };
  // console.log('addActive : ', addActive);

  useEffect(() => {
    //SetAddactive('active'); // addActive 에 active 넣어주기
  }, [statusList]);

  return (
    <button className={`status-btn ${className}`} onClick={(event) => onShowClickedStatus(event)}>
      <span className='blind'>{status}</span>
    </button>
  );
};

StatusButton.propTypes = {
  className: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  statusList: PropTypes.object.isRequired,
};

export default StatusButton;
