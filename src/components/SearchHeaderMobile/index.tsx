import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './SearchHeaderMobile.module.scss';

const SearchHeaderMobile: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const onSearch = () => {
    // eslint-disable-next-line no-console
    console.log(searchText);
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        value={searchText}
        type="text"
        placeholder="Поиск продукта"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div role="button" className={styles.iconWrapper} onClick={onSearch}>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} size="lg" />
      </div>
    </div>
  );
};

export default SearchHeaderMobile;
