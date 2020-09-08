import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import { userStore, categoryStore } from '../../../../helpers/store';
import useModal from '../../../../hook/useModal';
import AddCategoryModal from '../AddCategoryModal';
import EditCategoryModal from '../EditCategoryModal';

import './CategoryCard.scss';

interface IProps {
  id: string;
  image: string;
  title: string;
  isAddAction?: boolean;
  link?: string;
  description?: string;
  imageWidth?: string | number;
  imageHeight?: string | number;
}

const preventClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
  event.stopPropagation();
  event.preventDefault();
};

const CategoryCard: React.FC<IProps> = observer(
  ({ id, image, title, description, isAddAction, link = '', imageWidth = '15rem', imageHeight = '15rem' }) => {
    const { isAuth } = userStore;
    const { removeById } = categoryStore;
    const [isShowedAdd, showModalAdd, hideModalAdd] = useModal();
    const [isShowedEdit, showModalEdit, hideModalEdit] = useModal();

    const Container = link && !isAddAction ? Link : 'div';

    const onOpenAdd = () => {
      if (isAddAction) {
        showModalAdd();
      }
    };

    const onOpenEdit = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      preventClick(event);
      showModalEdit();
    };

    const onRemove = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      preventClick(event);
      removeById(id);
    };

    return (
      <>
        <Container
          role="button"
          onClick={onOpenAdd}
          to={link}
          className="card-item"
          style={{ height: imageHeight, width: imageWidth }}>
          <img
            className={classnames({ 'card-item__img': !isAddAction, 'card-item__add': isAddAction })}
            src={image}
            alt={title}
          />
          <div className="card-item__bottom">
            <span className="card-item__label">{title}</span>
            {description && <span className="card-item__count">{description}</span>}
          </div>
          {isAuth && !isAddAction && (
            <div className="card-item__admin">
              <input className="card-item__admin-button" type="button" value="Удалить" onClick={onRemove} />
              <input className="card-item__admin-button" type="button" value="Изменить" onClick={onOpenEdit} />
            </div>
          )}
        </Container>
        <AddCategoryModal isShowed={isShowedAdd} hide={hideModalAdd} />
        <EditCategoryModal defaultValues={{ title, imageUrl: image }} isShowed={isShowedEdit} hide={hideModalEdit} />
      </>
    );
  }
);

export default CategoryCard;
