import React from 'react';

import { CART_LIST } from '../../mock/constants';

import './CartList.scss';

const CartList: React.FC = () => {
  return (
    <div className="cart-list">
      {CART_LIST.map((item) => (
        <div key={item.id} className="cart-list__item">
          <img className="cart-list__item__image" src={item.img} alt={item.title} />
        </div>
      ))}
    </div>
  );
};

export default CartList;
