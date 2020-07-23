import React from 'react';
import classnames from 'classnames';

import DesktopHeader from '../../components/DesktopHeader';
import MobileHeader from '../../components/MobileHeader';
import FixedCart from '../../components/FixedCart';

import './HeaderLayout.scss';

interface IProps {
  isWrappedContainer?: boolean;
}

const HeaderLayout: React.FC<IProps> = ({ children, isWrappedContainer }) => {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
      <FixedCart />
      <div className={classnames({ 'header-layout__content': true, 'header-layout__container': isWrappedContainer })}>
        {children}
      </div>
    </>
  );
};

export default HeaderLayout;
