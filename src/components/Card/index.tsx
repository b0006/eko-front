import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import { userStore } from '../../mobx';
import useModal from '../../hook/useModal';
import CategoryModal from '../CategoryModal';

import './Card.scss';

interface IProps {
  image: string;
  title: string;
  isAddAction?: boolean;
  link?: string;
  description?: string;
  imageWidth?: string | number;
  imageHeight?: string | number;
}

const Card: React.FC<IProps> = observer(
  ({ image, title, description, isAddAction, link = '', imageWidth = '15rem', imageHeight = '15rem' }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { isAuth } = userStore;
    const { isShowed, showModal, hideModal } = useModal();

    const Container = link && !isAddAction ? Link : 'div';

    const onOpenAddCategoryModal = () => {
      if (isAddAction) {
        showModal();
      }
    };

    return (
      <>
        <Container
          role="button"
          onClick={onOpenAddCategoryModal}
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
        </Container>
        <CategoryModal isShowed={isShowed} hide={hideModal} />
      </>
    );
  }
);

export default Card;
