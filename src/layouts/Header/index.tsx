import React from 'react';

import './HeaderLayout.scss';

interface IProps {
  isWrappedContainer?: boolean;
}

const HeaderLayout: React.FC<IProps> = ({ children, isWrappedContainer }) => {
  return (
    <>
      <header>HeaderLayout</header>
      <div>{children}</div>
    </>
  );
};

export default HeaderLayout;
