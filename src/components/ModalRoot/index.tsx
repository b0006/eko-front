import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import ReactModal from 'react-modal';

import { modalStore, headerStore } from '../../mobx';
import { toggleHtmlScroll } from '../../utils/html';

import MODAL_TYPES from './modalTypes';
import './ModalRoot.scss';

const ModalRoot: React.FC = observer(() => {
  const [isOpen, setIsOpen] = useState(false);
  const { modal, closeModal } = modalStore;
  const { isFixed } = headerStore;

  useEffect(() => {
    setIsOpen(modal.type !== 'noModal');
    toggleHtmlScroll(modal.type !== 'noModal', isFixed);
  }, [modal.type, isFixed]);

  // useEffect(() => {
  //   if (isOpen) {
  //     toggleHtmlScroll(true, isFixed);
  //   } else {
  //     setTimeout(() => toggleHtmlScroll(false, isFixed), 200);
  //   }
  // }, [isOpen, isFixed]);

  const onClose = () => {
    closeModal();
  };

  if (modal.type === 'noModal') {
    return null;
  }

  const SpecifiedModal = MODAL_TYPES[modal.type];

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      shouldFocusAfterRender={false}
      shouldCloseOnOverlayClick
      overlayClassName="modal-root__overlay"
      className="modal-root__content"
      bodyOpenClassName="modal-root__body">
      <SpecifiedModal />
    </ReactModal>
  );
});

export default ModalRoot;
