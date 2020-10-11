import React from 'react';

import LoginForm from '../../modules/user/components/LoginForm';

import './LoginPage.scss';

const LoginPage: React.FC = () => {
  return (
    <div className="container">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
