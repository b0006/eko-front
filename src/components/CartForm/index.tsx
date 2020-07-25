import React from 'react';

import './CartForm.scss';

const CartForm: React.FC = () => {
  const onSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <form className="cart-form">
      <fieldset className="cart-form__fieldset">
        <legend className="cart-form__legend">Введите ваши контакты</legend>

        <div className="cart-form__field">
          <label className="cart-form__label" htmlFor="cart-fullname">
            Как к Вам обращаться
          </label>
          <input
            className="cart-form__input"
            type="text"
            id="cart-fullname"
            name="fullname"
            placeholder="Имя и фамилия"
          />
        </div>
        <div className="cart-form__field">
          <label className="cart-form__label" htmlFor="cart-phone">
            Телефон
          </label>
          <input
            className="cart-form__input"
            type="text"
            id="cart-phone"
            name="phone"
            placeholder="+7 (___) ___ __ __"
          />
        </div>
        <div className="cart-form__field">
          <label className="cart-form__label" htmlFor="cart-email">
            Email
          </label>
          <input className="cart-form__input" type="text" id="cart-email" name="email" placeholder="example@mail.com" />
        </div>
      </fieldset>
      <div className="cart-form__bottom">
        <input onClick={onSubmit} className="button-primary cart-form__submit" type="submit" value="Оформить заказ" />
      </div>
    </form>
  );
};

export default CartForm;
