import { decorate, observable, action } from 'mobx';

import { CART_LIST } from '../../mock/constants';

export class CartStore {
  public cartList = CART_LIST;

  public updateCartList = (list: any[]) => {
    this.cartList = list;
  };

  public removeById = (id: string) => {
    this.cartList = this.cartList.filter((i) => i.id !== id);
  };

  public addToCart = (item: any) => {
    this.cartList.push(item);
  };
}

decorate(CartStore, {
  cartList: observable,
  updateCartList: action,
  removeById: action,
  addToCart: action,
});

export default new CartStore();
