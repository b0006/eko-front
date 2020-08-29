import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './SearchHeaderMobile.scss';

const SearchHeaderMobile: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const onSearch = () => {
    // eslint-disable-next-line no-console
    console.log(searchText);
  };

  return (
    <div className="search-header-mobile">
      <input
        className="search-header-mobile__input"
        value={searchText}
        type="text"
        placeholder="Поиск продукта"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div role="button" className="search-header-mobile__icon-wrapper" onClick={onSearch}>
        <FontAwesomeIcon className="search-header-mobile__icon" icon={faSearch} size="lg" />
      </div>
    </div>
  );
};

export default SearchHeaderMobile;
