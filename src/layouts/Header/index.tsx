import React from 'react';
import classnames from 'classnames';

import DesktopHeader from '../../components/DesktopHeader';
import MobileHeader from '../../components/MobileHeader';
import FixedCart from '../../components/FixedCart';
import Footer from '../../components/Footer';

import './HeaderLayout.scss';

interface IProps {
  isWrappedContainer?: boolean;
}

const HeaderLayout: React.FC<IProps> = ({ children, isWrappedContainer }) => {
  return (
    <>
      <header>
        <DesktopHeader />
        <MobileHeader />
        <FixedCart />
      </header>
      <div className={classnames('header-layout__content', { 'header-layout__container': isWrappedContainer })}>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default HeaderLayout;
