import React from 'react';
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react-lite';

import ModalLayout from '../../layouts/ModalNew';
import UploadInput from '../UploadInput';
import TextInput from '../TextInput';
import { categoryStore, modalStore } from '../../mobx';
import notify from '../../utils/notify';

// import './CategoryModal.scss';

type Inputs = {
  title: string;
  imageFile: FileList;
};

const CategoryModal: React.FC = observer(() => {
  const { addToList } = categoryStore;
  const { closeModal } = modalStore;

  const { register, errors } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    const formData = new FormData();
    const [image] = data.imageFile;
    formData.append('image', image);
    formData.append('title', data.title);
    const created = await addToList(formData);
    if (created) {
      closeModal();
      notify.show({ text: 'Категория создана', type: 'success' });
    }
  };

  return (
    <ModalLayout title="Категоря" acceptAction={onSubmit}>
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
});

export default CategoryModal;
