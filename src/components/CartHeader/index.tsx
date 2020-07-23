import React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import BadgeHeader from '../BadgeHeader';

import './CartHeader.scss';

const CartHeader: React.FC<FontAwesomeIconProps> = ({ size, ...rest }) => {
  return (
    <div className="cart-header">
      <div className="cart-header__content">
        <BadgeHeader>
          <FontAwesomeIcon {...rest} size={size} icon={faShoppingCart} />
        </BadgeHeader>
        <span className="cart-header__content__price">900 руб</span>
      </div>
    </div>
  );
};

export default CartHeader;
