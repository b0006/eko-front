import React from 'react';

import { ReactComponent as LoaderSvg } from '../../assets/img/loader.svg';

interface IProps {
  className?: string;
}

const Loader: React.FC<IProps> = ({ className }) => {
  return (
    <div className={className}>
      <LoaderSvg />
    </div>
  );
};

export default Loader;
