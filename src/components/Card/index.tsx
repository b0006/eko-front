import React from 'react';
import { Link } from 'react-router-dom';

import './Card.scss';

interface IProps {
  image: string;
  title: string;
  link?: string;
  description?: string;
  imageWidth?: string | number;
  imageHeight?: string | number;
}

const Card: React.FC<IProps> = ({
  image,
  title,
  description,
  link = '',
  imageWidth = '15rem',
  imageHeight = '15rem',
}) => {
  const Container = link ? Link : 'div';

  return (
    <Container to={link} className="card-item" style={{ height: imageHeight, width: imageWidth }}>
      <div className="card-item__img" style={{ backgroundImage: `url('${image}')` }} />
      <div className="card-item__bottom">
        <span className="card-item__bottom__label">{title}</span>
        {description && <span className="card-item__bottom__count">{description}</span>}
      </div>
    </Container>
  );
};

export default Card;
