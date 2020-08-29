import React from 'react';
import { useForm } from 'react-hook-form';

import TextInput from '../../../form/components/TextInput';
import TextMaskInput from '../../../form/components/TextMaskInput';

import './CartForm.scss';

type Inputs = {
  fullName: string;
  phone: string;
  email: string;
};

const CartForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => {
    window.console.log(data);
  };

  return (
    <form className="cart-form" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="cart-form__fieldset">
        <legend className="cart-form__legend">Введите ваши контакты</legend>
        <div className="cart-form__field">
          <TextInput
            label="Как к Вам обращаться?"
            name="fullName"
            placeholder="Например, Евгений"
            errorText={errors.fullName && errors.fullName.message}
            ref={register({
              required: 'Введите Ваше имя',
            })}
          />
        </div>
        <div className="cart-form__field">
          <TextMaskInput
            label="Телефон"
            name="phone"
            errorText={errors.phone && errors.phone.message}
            placeholder="+7 (___) ___ __ __"
            mask="+7 (999) 999 99 99"
            ref={register({
              required: 'Введите Ваш телефон',
              pattern: {
                message: 'Некорректный телефон',
                value: /(\+7)\s\(?([0-9]{3})\)\s([ .-]?)([0-9]{3})\s([0-9]{2})\s([0-9]{2})/,
              },
            })}
          />
        </div>
        <div className="cart-form__field">
          <TextInput
            label="E-mail"
            name="email"
            placeholder="example@mail.com"
            errorText={errors.email && errors.email.message}
            ref={register({
              required: 'Введите Ваш email',
              pattern: {
                message: 'Некорректный email',
                value: /^(\S+)@([a-z0-9-]+)(\.)([a-z]{2,4})(\.?)([a-z]{0,4})+$/,
              },
            })}
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
