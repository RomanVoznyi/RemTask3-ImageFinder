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

export default Button;
