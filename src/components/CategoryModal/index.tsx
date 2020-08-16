import React from 'react';
import { useForm } from 'react-hook-form';

import { IModalProps } from '../../layouts/Modal/interfaces';
import ModalLayout from '../../layouts/Modal';
import UploadInput from '../UploadInput';
import TextInput from '../TextInput';
import { categoryStore } from '../../mobx';

import './CategoryModal.scss';

type Inputs = {
  title: string;
  imageFile: FileList;
};

const CategoryModal: React.FC<IModalProps> = ({ isShowed, hide }) => {
  const { addToList } = categoryStore;

  const { register, handleSubmit, errors } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    const formData = new FormData();
    const [image] = data.imageFile;
    formData.append('image', image);
    formData.append('title', data.title);
    const created = await addToList(formData);
    if (created) {
      console.log('Категория создана');
      hide();
    }
  };

  return (
    <ModalLayout
      type="form"
      submitBtn={{
        title: 'Создать',
        handler: handleSubmit(onSubmit),
      }}
      isShowedCancelBtn
      isShowed={isShowed}
      enctype="multipart/form-data"
      hide={hide}
      title="Создание новой категории"
      classNameModal="category-modal">
      <div className="category-modal__content">
        <TextInput
          label="Название"
          name="title"
          className="category-modal__input"
          placeholder="Например, Овощи"
          errorText={errors.title && errors.title.message}
          ref={register({
            required: 'Введите название категории',
            minLength: { value: 1, message: 'Название слишком короткое' },
            maxLength: { value: 45, message: 'Название слишком длинное' },
          })}
        />
        <UploadInput
          name="imageFile"
          accept="image/*"
          errorText={errors.imageFile && errors.imageFile.message}
          ref={register({ required: 'Выберите изображение' })}
        />
      </div>
    </ModalLayout>
  );
};

export default CategoryModal;
