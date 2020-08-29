import React from 'react';
import classnames from 'classnames';
import InputMask, { Props as InputMaskProps } from 'react-input-mask';

import './TextMaskInput.scss';

interface IProps extends InputMaskProps {
  label: string;
  className?: string;
  errorText?: string;
}

const TextMaskInput = React.forwardRef((props: IProps, ref?: React.Ref<HTMLInputElement>) => {
  const { label, errorText, className, ...rest } = props;
  return (
    <div className={classnames('text-mask-input', className)}>
      <label className="text-mask-input__label">{label}</label>
      <InputMask className="text-input__input" inputRef={ref} {...rest} />
      {errorText && <span className="text-mask-input__error">{errorText}</span>}
    </div>
  );
});

export default TextMaskInput;
