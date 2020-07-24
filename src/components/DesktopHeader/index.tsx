import React, { useEffect } from 'react';

import Logo from '../../components/Logo';
import SearchHeader from '../../components/SearchHeader';
import BottomHeader from '../../components/BottomHeader';
import { headerStore } from '../../mobx';

import './DesktopHeader.scss';

const DesktopHeader: React.FC = () => {
  const { toggleFixed } = headerStore;

  useEffect(() => {
    const onFixed = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      toggleFixed(winScroll >= 106);
    };

    onFixed();

    document.addEventListener('scroll', onFixed);
    return () => document.removeEventListener('scroll', onFixed);
  }, [toggleFixed]);

  return (
    <>
      <div className="desktop-header">
        <div className="desktop-header__container">
          <div className="desktop-header__content">
            <Logo className="desktop-header__content__logo" />
            <SearchHeader />
          </div>
        </div>
      </div>
      <BottomHeader />
    </>
  );
};

export default DesktopHeader;
