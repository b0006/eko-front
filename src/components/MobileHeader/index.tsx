import React from 'react';

import Logo from '../Logo';
import CartHeader from '../CartHeader';
import SidebarMenuHeader from '../SidebarMenuHeader';

import styles from './MobileHeader.module.scss';

const MobileHeader: React.FC = () => {
  return (
    <header className={styles.wrapper}>
      <SidebarMenuHeader />
      <Logo />
      <CartHeader icon="500px" size="lg" />
    </header>
  );
};

export default MobileHeader;
