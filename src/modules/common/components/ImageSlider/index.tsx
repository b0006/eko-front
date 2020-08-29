import React, { useState, useMemo } from 'react';
import classnames from 'classnames';

import './ImageSlider.scss';

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

  const isListExist = useMemo(() => list.length > 1, [list]);

  return (
    <div className="image-slider">
      <div>
        {list.map((image, index) => (
          <div
            key={image}
            className={classnames('image-slider__init-slide', {
              'image-slider__show': slideIndex === index,
            })}>
            {isListExist && <span className="image-slider__number-text">{`${slideIndex + 1} / ${list.length}`}</span>}
            <img className="image-slider__img" src={image} alt="" />
          </div>
        ))}
        {isListExist && (
          <>
            <span role="button" className="image-slider__prev" onClick={onPrev}>
              &#10094;
            </span>
            <span role="button" className="image-slider__next" onClick={onNext}>
              &#10095;
            </span>
          </>
        )}
      </div>
      {isListExist && (
        <div className="image-slider__dot-wrapper">
          {list.map((_, index) => (
            <span
              key={index}
              role="button"
              onClick={() => onCurrent(index)}
              className={classnames('image-slider__dot', {
                'image-slider__dot_active': slideIndex === index,
              })}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
