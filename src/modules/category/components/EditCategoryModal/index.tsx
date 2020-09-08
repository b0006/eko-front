import React from 'react';
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react-lite';

import { IModalProps } from '../../../../layouts/Modal/interfaces';
import ModalLayout from '../../../../layouts/Modal';
import UploadInput from '../../../form/components/UploadInput';
import TextInput from '../../../form/components/TextInput';
import { categoryStore } from '../../../../helpers/store';
import notify from '../../../../utils/notify';

import './EditCategoryModal.scss';

type Inputs = {
  title: string;
  imageFile: FileList;
};

interface IProps extends IModalProps {
  defaultValues: {
    title: string;
    imageUrl: string;
  };
}

const EditCategoryModal: React.FC<IProps> = observer(({ isShowed, hide, defaultValues }) => {
  const { create } = categoryStore;

  const { register, handleSubmit, errors } = useForm<Inputs>({ defaultValues });

  const onSubmit = async (data: Inputs) => {
    const formData = new FormData();
    const [image] = data.imageFile;
    formData.append('image', image);
    formData.append('title', data.title);
    const created = await create(formData);
    if (created) {
      hide();
      notify.show({ text: 'Категория изменена', type: 'success' });
    }
  };

  return (
    <ModalLayout
      type="form"
      submitBtn={{
        title: 'Изменить',
        handler: handleSubmit(onSubmit),
      }}
      isShowedCancelBtn
      isShowed={isShowed}
      enctype="multipart/form-data"
      hide={hide}
      title="Редактирование категории"
      classNameModal="edit-category-modal">
      <div className="edit-category-modal__content">
        <TextInput
          label="Название"
          name="title"
          className="edit-category-modal__input"
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
});

export default EditCategoryModal;
