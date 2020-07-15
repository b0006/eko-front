import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Card.module.scss';

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
    <Container to={link} className={styles.item} style={{ height: imageHeight, width: imageWidth }}>
      <div className={styles.img} style={{ backgroundImage: `url('${image}')` }} />
      <div className={styles.bottom}>
        <span className={styles.label}>{title}</span>
        {description && <span className={styles.count}>{description}</span>}
      </div>
    </Container>
  );
};

export default Card;
