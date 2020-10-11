import { decorate, observable, action } from 'mobx';

import HTTP from '../../../agent/axios';

const TOKEN_KEY = 'token';

const setHeaderToken = (token: string) => {
  HTTP.defaults.headers['Authorization'] = `Bearer ${token}`;
};

export class UserStore {
  // constructor() {
  //   const token = localStorage.getItem(TOKEN_KEY);
  //   if (token) {
  //     setHeaderToken(token);
  //     this.isAuth = true;
  //   }
  // }

  public isAuth = false;

  public saveToken = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
    setHeaderToken(token);
    this.isAuth = true;
  };

  public logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    this.isAuth = false;
  };
}

decorate(UserStore, {
  isAuth: observable,
  saveToken: action,
  logout: action,
});

export default new UserStore();
