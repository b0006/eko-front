import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import useFetchDataApi from '../../../../hook/useFetchDataApi.hook';
import { userStore } from '../../../../helpers/store';

import './LoginForm.scss';

type Inputs = {
  username: string;
  password: string;
};

interface ILoginData {
  accessToken: string;
  userData: {
    id: string;
    username: string;
  };
}

const LoginForm: React.FC = () => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const [response, login] = useFetchDataApi<Inputs, ILoginData>('/auth/login', 'POST');
  const { saveToken } = userStore;

  const onSubmit = (data: Inputs) => login(data);

  useEffect(() => {
    if (response.data) {
      saveToken(response.data.accessToken);
      history.push('/');
    }
  }, [history, response, saveToken]);

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="login-form__field">
        {response.error && <span className="login-form__error">{response.error.toString()}</span>}
        {errors.username && <span className="login-form__error">{errors.username.message}</span>}
        <input
          className="login-form__input"
          type="text"
          name="username"
          placeholder="Логин"
          ref={register({
            required: { message: 'Введите логин', value: true },
          })}
        />
      </div>
      <div className="login-form__field">
        {errors.password && <span className="login-form__error">{errors.password.message}</span>}
        <input
          className="login-form__input"
          type="password"
          name="password"
          placeholder="Пароль"
          ref={register({
            required: { message: 'Введите пароль', value: true },
          })}
        />
      </div>
      <input className="login-form__button" type="submit" value="Вход" />
    </form>
  );
};

export default LoginForm;
