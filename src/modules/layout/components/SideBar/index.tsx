import React from 'react';
import Icon from '../../../common/components/Icon';
import './style.scss';

const SideBar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo-wrapper">
        <Icon className="sidebar__logo-icon" type="logo" />
      </div>
    </aside>
  );
};

export default SideBar;
