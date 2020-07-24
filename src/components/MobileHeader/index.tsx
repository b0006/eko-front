import React from 'react';

import Logo from '../Logo';
import CartHeader from '../CartHeader';
import SidebarMenuHeader from '../SidebarMenuHeader';

import './MobileHeader.scss';

const MobileHeader: React.FC = () => {
  return (
    <div className="mobile-header">
      <SidebarMenuHeader />
      <Logo />
      <CartHeader icon="500px" size="lg" />
    </div>
  );
};

export default MobileHeader;
