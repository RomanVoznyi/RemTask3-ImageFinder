import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ url, setIsOpenModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleClick);
    return () => {
      window.removeEventListener('keydown', handleClick);
    };
  }, []);

  const handleClick = evt => {
    if (evt.key === 'Escape' || evt.type === 'click') {
      setIsOpenModal(false);
    }
  };

  return (
    <div className={styles.Overlay} onClick={handleClick}>
      <div className={styles.Modal}>
        <img src={url} alt="" />
      </div>
    </div>
  );
};

Modal.prototype = {
  url: PropTypes.string.isRequired,
  setIsOpenModal: PropTypes.func.isRequired,
};

export default Modal;
