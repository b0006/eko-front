import React from 'react';

import './LoginForm.scss';

const LoginForm: React.FC = () => {
  return (
    <form className="login-form">
      <input className="login-form__input" type="text" placeholder="Логин" />
      <input className="login-form__input" type="password" placeholder="Пароль" />
      <button type="submit" className="login-form__button">
        Вход
      </button>
    </form>
  );
};

export default LoginForm;
