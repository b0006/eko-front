import React from 'react';

import './BadgeHeader.scss';

interface IProps {
  count?: number;
}

const BadgeHeader: React.FC<IProps> = ({ children, count = 0 }) => {
  return (
    <div className="badge">
      {children}
      <span className="badge__label">{count}</span>
    </div>
  );
};

export default BadgeHeader;
