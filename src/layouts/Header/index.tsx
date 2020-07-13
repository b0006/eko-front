import React, { useEffect } from 'react';
import 'mobx-react-lite/batchingForReactDom';

import Logo from '../../assets/img/logo.png';
import SearchHeader from '../../components/SearchHeader';
import CartHeader from '../../components/CartHeader';
import BottomHeader from '../../components/BottomHeader';
import { headerStore } from '../../mobx';

import styles from './HeaderLayout.module.scss';

const HeaderLayout: React.FC = ({ children }) => {
  const { toggleFixed } = headerStore;

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      toggleFixed(winScroll >= 90);
    };

    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [toggleFixed]);

  return (
    <>
      <header className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.logo}>
              <img src={Logo} alt="logo" />
              <span>ЭкоСнеки</span>
            </div>
            <SearchHeader />
          </div>
          <CartHeader />
        </div>
      </header>
      <BottomHeader />
      <div>{children}</div>
    </>
  );
};

export default HeaderLayout;
