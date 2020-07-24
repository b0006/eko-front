import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import './InputCount.scss';

interface IProps {
  value: number;
  onPlus: () => void;
  onMinus: () => void;
  min?: number;
  max?: number;
}

const InputCount: React.FC<IProps> = ({ value, onMinus, onPlus, min = 0, max = 99 }) => {
  const onMinusClick = () => {
    if (value > min) {
      onMinus();
    }
  };

  const onPlusClick = () => {
    if (value < max) {
      onPlus();
    }
  };

  return (
    <div className="input-count">
      <FontAwesomeIcon className="input-count__icon" size="lg" onClick={onMinusClick} icon={faMinusCircle} />
      <div className="input-count__value">{value}</div>
      <FontAwesomeIcon className="input-count__icon" size="lg" onClick={onPlusClick} icon={faPlusCircle} />
    </div>
  );
};

export default InputCount;
