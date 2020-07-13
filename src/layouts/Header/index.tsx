import React from 'react';

import DesktopHeader from '../../components/DesktopHeader';
import MobileHeader from '../../components/MobileHeader';

const HeaderLayout: React.FC = ({ children }) => {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
      <div>{children}</div>
    </>
  );
};

export default HeaderLayout;
