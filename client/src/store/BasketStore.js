import { makeAutoObservable } from "mobx";

export default class BascketStore {
  constructor() {
    this._id = 0;
    this._basket = [];
    this._selectedDevice = {};
    this._totalCount = 0;
    this._count = 1;
    makeAutoObservable(this);
  }

  setBasket(basket) {
    this._basket = basket;
  }
  setBasketId(id) {
    this._id = id;
  }
  setCount(count) {
    this._count = count;
  }
  setSelectedDevice(device) {
    this._selectedDevice = device;
  }

  removeSelectedDevice() {
    this._selectedDevice = [];
  }

  setTotalCount(count) {
    this._totalCount = count;
  }
  get count() {
    return this._count;
  }
  get id() {
    return this._id;
  }
  get totalCount() {
    return this._totalCount;
  }
  get selectedDevice() {
    return this._selectedDevice;
  }

  get basket() {
    return this._basket;
  }
}
