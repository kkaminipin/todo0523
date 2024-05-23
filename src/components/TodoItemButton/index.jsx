import PropTypes from 'prop-types';

const TodoItemButton = ({ className, eventFunction, imgName, imgAlt }) => {
  return (
    <>
      <button
        type='button'
        className={`btn ${className} todo__btn`}
        onClick={eventFunction}
      >
        <img src={imgName} alt={imgAlt} className='todo__btn-img' />
      </button>
    </>
  );
};

TodoItemButton.propTypes = {
  className: PropTypes.string.isRequired,
  eventFunction: PropTypes.func.isRequired,
  imgName: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};

export default TodoItemButton;
