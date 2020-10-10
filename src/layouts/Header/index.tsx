import React from 'react';
import classnames from 'classnames';

import './HeaderLayout.scss';

interface IProps {
  isWrappedContainer?: boolean;
}

const HeaderLayout: React.FC<IProps> = ({ children, isWrappedContainer }) => {
  return (
    <>
      <header>HeaderLayout</header>
      <div className={classnames('header-layout__content', { 'header-layout__container': isWrappedContainer })}>
        {children}
      </div>
    </>
  );
};

export default HeaderLayout;
