import React from 'react';
import classnames from 'classnames';

import './TextInput.scss';

interface IProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
  className?: string;
  errorText?: string;
}

const TextInput = React.forwardRef((props: IProps, ref?: React.Ref<HTMLInputElement>) => {
  const { label, errorText, className, ...rest } = props;
  return (
    <div className={classnames('text-input', className)}>
      <label className="text-input__label">{label}</label>
      <input
        ref={ref}
        className={classnames('text-input__input', { 'text-input__input_error': errorText })}
        type="text"
        {...rest}
      />
      {errorText && <span className="text-input__error">{errorText}</span>}
    </div>
  );
});

export default TextInput;
