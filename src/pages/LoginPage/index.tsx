import React from 'react';

import LoginForm from '../../modules/user/components/LoginForm';
import Logo from '../../modules/common/components/Logo';

import './LoginPage.scss';

const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <Logo />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
