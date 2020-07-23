import React, { useEffect } from 'react';

import Logo from '../../components/Logo';
import SearchHeader from '../../components/SearchHeader';
import BottomHeader from '../../components/BottomHeader';
import { headerStore } from '../../mobx';

import styles from './DesktopHeader.module.scss';

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
      <header className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <Logo className={styles.logo} />
            <SearchHeader />
          </div>
        </div>
      </header>
      <BottomHeader />
    </>
  );
};

export default DesktopHeader;
