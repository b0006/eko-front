import React from 'react';
import classnames from 'classnames';

import DesktopHeader from '../../components/DesktopHeader';
import MobileHeader from '../../components/MobileHeader';
import FixedCart from '../../components/FixedCart';

import styles from './HeaderLayout.module.scss';

interface IProps {
  isWrappedContainer?: boolean;
}

const HeaderLayout: React.FC<IProps> = ({ children, isWrappedContainer }) => {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
      <FixedCart />
      <div className={classnames({ [styles.content]: true, [styles.container]: isWrappedContainer })}>{children}</div>
    </>
  );
};

export default HeaderLayout;
