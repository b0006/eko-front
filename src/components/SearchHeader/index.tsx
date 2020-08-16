import React, { useState, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import DropdownSearchHeader from '../DropdownSearchHeader';
import { categoryStore } from '../../mobx';

import './SearchHeader.scss';

const SearchHeader: React.FC = observer(() => {
  const [searchText, setSearchText] = useState('');
  const [searchCategory, setSearchCategory] = useState<string>();
  const { categoryList } = categoryStore;

  const onSubmit = () => {
    // eslint-disable-next-line no-console
    console.log(searchText, searchCategory);
  };

  const categoryOptionList = useMemo(
    () => categoryList.map((category) => ({ value: category.id, label: category.title })),
    [categoryList]
  );

  return (
    <section className="search-header">
      <input
        className="search-header__input"
        type="text"
        placeholder="Введите название продукта"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <DropdownSearchHeader value={searchCategory} onChange={setSearchCategory} options={categoryOptionList} />
      <div className="search-header__search" role="button" onClick={onSubmit}>
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </div>
    </section>
  );
});

export default SearchHeader;
