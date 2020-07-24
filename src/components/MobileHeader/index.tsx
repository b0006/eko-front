import React from 'react';

import Logo from '../Logo';
import SidebarMenuHeader from '../SidebarMenuHeader';

import './MobileHeader.scss';

const MobileHeader: React.FC = () => {
  return (
    <div className="mobile-header">
      <SidebarMenuHeader />
      <Logo />
    </div>
  );
};

export default MobileHeader;
