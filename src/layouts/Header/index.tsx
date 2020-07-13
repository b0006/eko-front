import React from 'react';

import DesktopHeader from '../../components/DesktopHeader';
import MobileHeader from '../../components/MobileHeader';

import styles from './HeaderLayout.module.scss';

const HeaderLayout: React.FC = ({ children }) => {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
      <div className={styles.content}>{children}</div>
    </>
  );
};

export default HeaderLayout;
