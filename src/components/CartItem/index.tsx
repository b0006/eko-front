import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import InputCount from '../InputCount';

import './CartItem.scss';

interface IProps {
  img: string;
  title: string;
  price: number;
  count: number;
  onRemove: () => void;
}

const CartItem: React.FC<IProps> = ({ img, title, price, count, onRemove }) => {
  const [countValue, setCountValue] = useState(count || 1);

  useEffect(() => {
    if (countValue === 0) {
      onRemove();
    }
  }, [countValue, onRemove]);

  return (
    <div className="cart-item">
      <img className="cart-item__image" src={img} alt={title} />
      <div className="cart-item__description">
        <div className="cart-item__description__title">{title}</div>
        <div className="cart-item__description__actions">
          <InputCount
            value={countValue}
            onPlus={() => setCountValue((prevState) => (prevState += 1))}
            onMinus={() => setCountValue((prevState) => (prevState -= 1))}
          />
          <div>{price} руб</div>
          <FontAwesomeIcon onClick={onRemove} className="cart-item__description__actions__remove" icon={faTrash} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
