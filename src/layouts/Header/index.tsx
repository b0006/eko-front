import React from 'react';

import Logo from '../../assets/img/logo.png';
import SearchHeader from '../../components/SearchHeader';
import CartHeader from '../../components/CartHeader';

import styles from './HeaderLayout.module.scss';

const HeaderLayout: React.FC = ({ children }) => {
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
      <div>{children}</div>
    </>
  );
};

export default HeaderLayout;
