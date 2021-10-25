import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleInput = ({ target }) => {
    setValue(target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(value);
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          value={value}
          onChange={handleInput}
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.prototype = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
