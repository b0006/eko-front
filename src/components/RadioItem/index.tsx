import React from 'react';

import styles from './RadioItem.module.scss';

interface IProps {
  label?: string;
  name?: string;
  value?: string;
  checked?: boolean;
}

const RadioItem: React.FC<IProps> = ({ name, value, label, checked }) => {
  return (
    <div className={styles.wrapper}>
      <input type="radio" id={`${name}_${value}_radio`} name={name} defaultChecked={checked} />
      <label htmlFor={`${name}_${value}_radio`}>{label}</label>
    </div>
  );
};

export default RadioItem;
