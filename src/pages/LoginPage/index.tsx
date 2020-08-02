import React from 'react';

import LoginForm from '../../components/LoginForm';
import Logo from '../../components/Logo';

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
