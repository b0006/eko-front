import React from 'react';
import InputMask from 'react-input-mask';
import { useForm, Controller } from 'react-hook-form';

import './CartForm.scss';

type Inputs = {
  fullName: string;
  phone: string;
  email: string;
};

const CartForm: React.FC = () => {
  const { register, handleSubmit, control, watch, errors } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  return (
    <form className="cart-form" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="cart-form__fieldset">
        <legend className="cart-form__legend">Введите ваши контакты</legend>

        <div className="cart-form__field">
          <label className="cart-form__label" htmlFor="cart-fullname">
            Как к Вам обращаться
          </label>
          {errors.fullName && <span className="cart-form__error">Введите Ваше имя</span>}
          <input
            className="cart-form__input"
            type="text"
            id="cart-fullname"
            name="fullName"
            placeholder="Имя и фамилия"
            ref={register({ required: true })}
          />
        </div>
        <div className="cart-form__field">
          <label className="cart-form__label" htmlFor="cart-phone">
            Телефон
          </label>
          {errors.phone && (
            <span className="cart-form__error">{!watch('phone') ? 'Введите Ваш телефон' : 'Некорректный телефон'}</span>
          )}
          <Controller
            as={InputMask}
            control={control}
            className="cart-form__input"
            type="text"
            id="cart-phone"
            name="phone"
            placeholder="+7 (___) ___ __ __"
            mask="+7 (999) 999 99 99"
            defaultValue=""
            rules={{ required: true, pattern: /(\+7)\s\(?([0-9]{3})\)\s([ .-]?)([0-9]{3})\s([0-9]{2})\s([0-9]{2})/gm }}
          />
        </div>
        <div className="cart-form__field">
          <label className="cart-form__label" htmlFor="cart-email">
            Email
          </label>
          {errors.email && (
            <span className="cart-form__error">{!watch('email') ? 'Введите Ваш email' : 'Некорректный email'}</span>
          )}
          <input
            className="cart-form__input"
            type="text"
            id="cart-email"
            name="email"
            placeholder="example@mail.com"
            ref={register({ required: true, pattern: /^(\S+)@([a-z0-9-]+)(\.)([a-z]{2,4})(\.?)([a-z]{0,4})+$/gm })}
          />
        </div>
      </fieldset>
      <div className="cart-form__bottom">
        <input className="button-primary cart-form__submit" type="submit" value="Оформить заказ" />
      </div>
    </form>
  );
};

export default CartForm;
