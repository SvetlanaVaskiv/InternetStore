import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {};
    this._error = false;
    this._role = "";
    this._id = null;
    makeAutoObservable(this);
  }

  setError(bool) {
    this._error = bool;
  }
  setRole(role) {
    this._role = role;
  }
  setId(id) {
    this._id = id;
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
  get role() {
    return this._role;
  }
  get id() {
    return this._id
  }
}
