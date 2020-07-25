import React from 'react';

import Logo from '../../components/Logo';
import SearchHeader from '../../components/SearchHeader';
import BottomHeader from '../../components/BottomHeader';

import './DesktopHeader.scss';

const DesktopHeader: React.FC = () => {
  return (
    <>
      <div className="desktop-header">
        <div className="desktop-header__container">
          <div className="desktop-header__content">
            <Logo className="desktop-header__logo" />
            <SearchHeader />
          </div>
        </div>
      </div>
      <BottomHeader />
    </>
  );
};

export default DesktopHeader;
