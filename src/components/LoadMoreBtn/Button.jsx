import clsx from 'clsx';
import PropTypes from 'prop-types';

const Button = ({ handleLoadMore }) => {
  return (
    <button onClick={handleLoadMore} className={clsx('Button')} type="submit">
      Load More
    </button>
  );
};
export default Button;

Button.propTypes={
  handleLoadMore: PropTypes.func.isRequired,
}
