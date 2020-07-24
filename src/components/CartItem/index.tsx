import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import InputCount from '../InputCount';
import { cartStore } from '../../mobx';

import './CartItem.scss';

interface IProps {
  id: string;
  img: string;
  title: string;
  price: number;
  count: number;
  onRemove: () => void;
}

const CartItem: React.FC<IProps> = ({ id, img, title, price, count, onRemove }) => {
  const { updateCountItem } = cartStore;

  useEffect(() => {
    if (count === 0) {
      onRemove();
    }
  }, [count, onRemove]);

  const onPlus = () => updateCountItem(id, 1);
  const onMinus = () => updateCountItem(id, -1);

  return (
    <div className="cart-item">
      <img className="cart-item__image" src={img} alt={title} />
      <div className="cart-item__description">
        <div className="cart-item__description__title">{title}</div>
        <div className="cart-item__description__actions">
          <InputCount value={count} onPlus={onPlus} onMinus={onMinus} />
          <div>{price} руб</div>
          <FontAwesomeIcon onClick={onRemove} className="cart-item__description__actions__remove" icon={faTrash} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
