import styles from './Loader.module.css';

const Loader = () => {
  return (
    <>
      <div className={styles.ldsDefault}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.loading}>Loading...</div>
    </>
  );
};

export default Loader;
