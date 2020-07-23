import React from 'react';

import { IModalProps } from '../../layouts/Modal/interfaces';
import ModalLayout from '../../layouts/Modal';

const FixedCartModal: React.FC<IModalProps> = ({ isShowed, hide }) => {
  return (
    <ModalLayout isShowed={isShowed} hide={hide}>
      <div>FixedCartModal</div>
    </ModalLayout>
  );
};

export default FixedCartModal;
