import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import DropdownSearchHeader from '../DropdownSearchHeader';
import { CATEGORY_LIST } from '../../mock/constants';

import styles from './SearchHeader.module.scss';

interface IOptionItem {
  label: string;
  value: string;
}

const SearchHeader: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [searchCategory, setSearchCategory] = useState<string>();

  const onSubmit = () => {
    // eslint-disable-next-line no-console
    console.log(searchText, searchCategory);
  };

  return (
    <section className={styles.wrapper}>
      <input
        type="text"
        placeholder="Введите название продукта"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <DropdownSearchHeader value={searchCategory} onChange={setSearchCategory} options={CATEGORY_LIST} />
      <div className={styles.search} role="button" onClick={onSubmit}>
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </div>
    </section>
  );
};

export default SearchHeader;
