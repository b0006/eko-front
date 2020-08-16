import React from 'react';
import { observer } from 'mobx-react-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { modalStore } from '../../mobx';

export interface IProps {
  title: string;
  children: React.ReactNode;
  acceptAction: (args?: any) => void;
  cancelAction?: () => void;
  acceptLabel?: string;
  cancelLabel?: string;
  disabledAccept?: boolean;
  link?: { url: string; label: string };
  acceptDisabled?: boolean;
  showSubmitButtons?: boolean;
}

const ModalLayout: React.FC<IProps> = observer(
  ({
    title,
    acceptAction,
    children,
    acceptLabel = 'Save',
    cancelLabel = 'Cancel',
    link = undefined,
    acceptDisabled = false,
    showSubmitButtons = true,
  }) => {
    const { closeModal } = modalStore;

    return (
      <div>
        <FontAwesomeIcon className="modal-layout__close" icon={faTimes} size="2x" onClick={closeModal} />
        {title && <div className="modal-layout__title">{title}</div>}
        {children}
        <div className="modal-layout__bottom">
          <input className="modal-layout__button" type="button" value={cancelLabel} />
          <input className="modal-layout__button" type="submit" value={acceptLabel} />
        </div>
      </div>
    );
  }
);

export default ModalLayout;
