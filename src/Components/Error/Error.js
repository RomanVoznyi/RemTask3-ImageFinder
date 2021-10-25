import PropTypes from 'prop-types';
import styles from './Error.module.css';

const Error = ({ error }) => {
  return <h2 className={styles.Error}>{error}</h2>;
};

Error.prototype = {
  error: PropTypes.string.isRequired,
};

export default Error;
