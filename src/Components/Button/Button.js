import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ loadMore }) => {
  return (
    <div className={styles.buttonOverlay}>
      <button type="button" className={styles.Button} onClick={loadMore}>
        Load more
      </button>
    </div>
  );
};

Button.prototype = {
  loadMore: PropTypes.func.isRequired,
};

export default Button;
