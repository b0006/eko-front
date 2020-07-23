import React from 'react';

import './TitleBlock.scss';

interface IProps {
  top: string;
  middle: string;
  bottom?: string;
}

const TitleBlock: React.FC<IProps> = ({ top, middle, bottom }) => {
  return (
    <div className="title-block">
      <span className="title-block__top">{top}</span>
      <span className="title-block__middle">{middle}</span>
      {bottom && <span className="title-block__bottom">{bottom}</span>}
    </div>
  );
};

export default TitleBlock;
