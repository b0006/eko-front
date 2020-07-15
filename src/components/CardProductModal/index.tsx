import React from 'react';

import ModalLayout from '../../layouts/Modal';

interface IProps {
  isShowed: boolean;
  hide: () => void;
}

const CardProductModal: React.FC<IProps> = ({ isShowed, hide }) => {
  return (
    <ModalLayout isShowed={isShowed} hide={hide}>
      <div>CardProductModal</div>
    </ModalLayout>
  );
};

export default CardProductModal;
