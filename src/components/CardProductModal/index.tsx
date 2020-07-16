import React from 'react';

import ModalLayout from '../../layouts/Modal';
import ImageSlider from '../ImageSlider';
import RadioItem from '../RadioItem';

import styles from './CardProductModal.module.scss';

interface IProps {
  isShowed: boolean;
  hide: () => void;
}

const CardProductModal: React.FC<IProps> = ({ isShowed, hide }) => {
  return (
    <ModalLayout isShowed={isShowed} hide={hide}>
      <div className={styles.wrapper}>
        <div className={styles.imageContent}>
          <ImageSlider list={['./categories/gifts.webp', './categories/paste.webp', './categories/sets.webp']} />
        </div>
        <div className={styles.descriptionContent}>
          <span className={styles.title}>Ассорти пастилы M</span>
          <div className={styles.price}>
            <span className={styles.actual}>1300 руб</span>
            <span className={styles.old}>1500 руб</span>
          </div>
          <div className={styles.properties}>
            <RadioItem name="test" label="35 гр - 190 руб" value="test1" checked />
            <RadioItem name="test" label="70 гр - 280 руб" value="test2" />
            <RadioItem name="test" label="500 гр - 1400 руб" value="test3" />
            <RadioItem name="test" label="70 гр - 280 руб" value="test2" />
            <RadioItem name="test" label="500 гр - 1400 руб" value="test3" />
            <RadioItem name="test" label="70 гр - 280 руб" value="test2" />
            <RadioItem name="test" label="500 гр - 1400 руб" value="test3" />
            <RadioItem name="test" label="70 гр - 280 руб" value="test2" />
            <RadioItem name="test" label="500 гр - 1400 руб" value="test3" />
            <RadioItem name="test" label="70 гр - 280 руб" value="test2" />
            <RadioItem name="test" label="500 гр - 1400 руб" value="test3" />
          </div>
          <input type="button" className={styles.button} value="Добавить в корзину" />
          <div
            dangerouslySetInnerHTML={{
              __html: `Хрустящие кисло-сладкие кружочки апельсина - рай для любителей цитрусовых!
              - апельсины шикарны для профилактики и лечения авитаминоза.<br>
              <ul> <li> чрезвычайно богаты АНТИОКСИДАНТАМИ: улучшают состояние кожи и волос </li>
              <li> состав апельсинов помогает бороться с неприятным запахом изо рта </li>
              <li> апельсины обладают ТОНИЗИРУЮЩИМИ свойствами и помогают лучше переносить усталость </li>
              </ul>Внимание: в данный момент апельсины готовим в кожуре.<br><br>
              <strong>Пищевая ценность на 100 гр продукта:</strong>
              <br>белки: 2,1 г, жиры 1,0 г, углеводы 71 г, эн. ценность 299 ккал.<br>
              <strong>Состав:</strong> 100% апельсин. Без сахара и любых добавок.<br>
              <strong>Срок годности:</strong> 12 месяцев</div>`,
            }}
          />
        </div>
      </div>
    </ModalLayout>
  );
};

export default CardProductModal;
