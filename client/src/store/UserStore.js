import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {};
    this._error = "";
    makeAutoObservable(this);
  }

  setError(bool) {
    this._error = bool;
  }
  setIsAuth(bool) {
    this._isAuth = bool;
  }
  setUser(user) {
    this._user = user;
  }
  get error() {
    return this._error;
  }
  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
}
