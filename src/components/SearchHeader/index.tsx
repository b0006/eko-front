import React, { useState } from 'react';

import DropdownSelect from '../DropdownSelect';

import { ReactComponent as SearchIcon } from './assets/search.svg';
import styles from './SearchHeader.module.scss';

interface IOptionItem {
  label: string;
  value: string;
}

const OPTION_LIST: IOptionItem[] = [
  { label: 'Фрукты', value: 'fruits' },
  { label: 'Подарочные наборы', value: 'gifts' },
];

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
      <DropdownSelect value={searchCategory} onChange={setSearchCategory} options={OPTION_LIST} />
      <div className={styles.search} role="button" onClick={onSubmit}>
        <SearchIcon />
      </div>
    </section>
  );
};

export default SearchHeader;
