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

const VK_DATA = {
  client_id: '7590902',
  redirect_uri: 'http://localhost:5000/auth/vk/callback',
  display: 'popup',
  scope: 'email',
  response_type: 'code',
  v: '5.122',
};

const GOOGLE_DATA = {
  redirect_uri: 'http://me.mydomain.com:5000/auth/google/callback',
  response_type: 'code',
  client_id: '213999649597-bd74qs4rnaa8sgn1vnb672ivqkfomf5k.apps.googleusercontent.com',
  scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
};

const LoginForm: React.FC = () => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const [response, login] = useFetchDataApi<Inputs, ILoginData>('/auth/login', 'POST');
  // const [vkResponse, vkLogin] = useFetchDataApi<any, any>(
  //   `https://oauth.vk.com/authorize?${new URLSearchParams(VK_DATA).toString()}`
  // );
  const { saveToken } = userStore;

  const onSubmit = (data: Inputs) => login(data);

  useEffect(() => {
    if (response.data) {
      saveToken(response.data.accessToken);
      history.push('/');
    }
  }, [history, response, saveToken]);

  const onVkLogin = () => {
    window.location.href = `https://oauth.vk.com/authorize?${new URLSearchParams(VK_DATA).toString()}`;
  };

  const onGoogleLogin = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/auth?${new URLSearchParams(GOOGLE_DATA).toString()}`;
  };

  // useEffect(() => {
  //   console.log(vkResponse);
  // }, [vkResponse]);

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
      <input type="button" value="VK" onClick={onVkLogin} />
      <input type="button" value="Google" onClick={onGoogleLogin} />
    </form>
  );
};

export default LoginForm;
