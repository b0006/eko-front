import { decorate, observable, action, computed } from 'mobx';

import { CART_LIST } from '../../../mock/constants';

export class CartStore {
  public cartList = CART_LIST;

  public updateCartList = (list: any[]) => {
    this.cartList = list;
  };

  public updateCountItem = (id: string, offset: number) => {
    const list = [...this.cartList];

    const findIndex = list.findIndex((i) => i.id === id);
    let findItem = list.find((i) => i.id === id);
    if (findItem) {
      findItem = { ...findItem, count: findItem.count + offset };

      this.cartList = list.map((item, index) => {
        if (index !== findIndex) return item;
        return {
          ...item,
          ...findItem,
        };
      });
    }
  };

  public removeById = (id: string) => {
    this.cartList = this.cartList.filter((i) => i.id !== id);
  };

  public addToCart = (item: any) => {
    this.cartList.push(item);
  };

  public get totalPrice() {
    return this.cartList.reduce((a, b) => a + b.price * b.count, 0);
  }
}

decorate(CartStore, {
  cartList: observable,
  updateCartList: action,
  removeById: action,
  addToCart: action,
  totalPrice: computed,
  updateCountItem: action,
});

export default new CartStore();
