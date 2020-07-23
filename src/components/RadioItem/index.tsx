import React from 'react';

import './RadioItem.scss';

interface IProps {
  label?: string;
  name?: string;
  value?: string;
  checked?: boolean;
}

const RadioItem: React.FC<IProps> = ({ name, value, label, checked }) => {
  return (
    <div className="radio-item">
      <input type="radio" id={`${name}_${value}_radio`} name={name} defaultChecked={checked} />
      <label htmlFor={`${name}_${value}_radio`}>{label}</label>
    </div>
  );
};

export default RadioItem;
