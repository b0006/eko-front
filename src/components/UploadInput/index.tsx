import React, { useState } from 'react';
import classnames from 'classnames';

import { TImage } from '../../types/image';

import './UploadInput.scss';

interface IProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  caption?: string;
  errorText?: string;
  className?: string;
}

const UploadInput = React.forwardRef((props: IProps, ref?: React.Ref<HTMLInputElement>) => {
  const { caption = 'Добавить изображение', className, errorText, ...rest } = props;
  const [previewImg, setPreviewImg] = useState<TImage>();
  const [readerError, setReaderError] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const [imgFile] = event.target.files;
    setReaderError('');
    if (imgFile) {
      const reader = new FileReader();

      reader.readAsDataURL(imgFile);

      reader.onloadend = () => {
        setPreviewImg(reader.result);
      };

      reader.onerror = () => setReaderError('Ошибка загрузки файла');
    } else {
      setPreviewImg(null);
    }
  };

  return (
    <label className={classnames('upload-input', className)}>
      {previewImg && <img className="upload-input__preview-img" src={previewImg.toString()} alt="preview" />}
      {!previewImg && <span className="upload-input__title">{caption}</span>}
      <input ref={ref} className="upload-input__input" type="file" onChange={onChange} {...rest} />
      {(errorText || readerError) && <span className="upload-input__error">{errorText || readerError}</span>}
    </label>
  );
});

export default UploadInput;
