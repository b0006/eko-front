import React from 'react';

import Logo from '../Logo';
import SearchHeader from '../SearchHeader';
import BottomHeader from '../BottomHeader';
import LogoutHeader from '../LogoutHeader';

import './DesktopHeader.scss';

const DesktopHeader: React.FC = () => {
  return (
    <>
      <div className="desktop-header">
        <div className="desktop-header__container">
          <div className="desktop-header__content">
            <Logo className="desktop-header__logo" />
            <SearchHeader />
            <LogoutHeader />
          </div>
        </div>
      </div>
      <BottomHeader />
    </>
  );
};

export default DesktopHeader;
