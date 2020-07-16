import React, { useState } from 'react';
import classnames from 'classnames';

import styles from './ImageSlider.module.scss';

interface IProps {
  list: string[];
}

const ImageSlider: React.FC<IProps> = ({ list }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const onPrev = () => {
    setSlideIndex((prevState) => {
      if (prevState === 0) {
        return list.length - 1;
      }
      return prevState - 1;
    });
  };

  const onNext = () => {
    setSlideIndex((prevState) => {
      if (list.length - 1 === prevState) {
        return 0;
      }
      return prevState + 1;
    });
  };

  const onCurrent = (index: number) => setSlideIndex(index);

  return (
    <>
      <div className={styles.wrapper}>
        {list.map((image, index) => (
          <div
            key={image}
            className={classnames({
              [styles.initSlide]: true,
              [styles.fade]: true,
              [styles.show]: slideIndex === index,
            })}>
            {list.length > 1 && <span className={styles.numberText}>{`${slideIndex + 1} / ${list.length}`}</span>}
            <img src={image} alt="" />
          </div>
        ))}
        {list.length > 1 && (
          <>
            <span role="button" className={styles.prev} onClick={onPrev}>
              &#10094;
            </span>
            <span role="button" className={styles.next} onClick={onNext}>
              &#10095;
            </span>
          </>
        )}
      </div>
      {list.length > 1 && (
        <div className={styles.dotWrapper}>
          {list.map((_, index) => (
            <span
              key={index}
              role="button"
              onClick={() => onCurrent(index)}
              className={classnames({ [styles.dot]: true, [styles.active]: slideIndex === index })}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ImageSlider;
