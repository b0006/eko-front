import React from 'react';

import CartItem from '../CartItem';
import { cartStore } from '../../../../helpers/store';

import './CartList.scss';

const CartList: React.FC = () => {
  const { removeById, cartList } = cartStore;

  return (
    <div className="cart-list">
      {cartList.map((item) => (
        <CartItem
          id={item.id}
          key={item.id}
          title={item.title}
          count={item.count}
          img={item.img}
          price={item.price}
          onRemove={() => removeById(item.id)}
        />
      ))}
    </div>
  );
};

export default CartList;
