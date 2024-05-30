import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './styles/style.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

const StatusButton = ({ className, status, statusList }) => {
  const todoStatus = useSelector((state) => state.status);
  const dispatch = useDispatch();
  const [addActive, SetAddactive] = useState('');
  const onShowClickedStatus = () => {
    const activeBoolean = addActive === 'active' ? '' : 'active';
    dispatch({ type: 'setStatus', payload: status });
    SetAddactive(activeBoolean);
    // console.log('addActive : ', addActive);
    // dispatch({ type: 'todoSave', payload: status });

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
    SetAddactive('active'); // addActive 에 active 넣어주기
  }, [statusList]);

  const buttonClassName = useMemo(() => {
    const isChecked = false; //todoStatus.filter((item) => item === status)?.length !== 0; 참고용 // TODO 조건 체크 기능 구현
    return isChecked
      ? `status-btn ${className} active`
      : `status-btn ${className}`;
  }, [className, todoStatus]);
  return (
    <button
      className={buttonClassName}
      onClick={(event) => onShowClickedStatus(event)}
    >
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
