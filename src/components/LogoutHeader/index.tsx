import React from 'react';
import { observer } from 'mobx-react-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { userStore } from '../../mobx';

import './LogoutHeader.scss';

const LogoutHeader: React.FC = observer(() => {
  const { isAuth, logout } = userStore;

  if (!isAuth) {
    return null;
  }

  return (
    <div className="logout-header" role="button" onClick={logout}>
      <div className="logout-header__content">
        <FontAwesomeIcon className="logout-header__icon" icon={faSignOutAlt} size="lg" />
        <span>Выход</span>
      </div>
    </div>
  );
});

export default LogoutHeader;
