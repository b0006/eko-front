import React, { useRef, useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { toggleHtmlScroll } from '../../utils/html';

import { IModalProps } from './interfaces';
import styles from './ModalLayout.module.scss';

const modalRoot = document.getElementById('modal');

const ModalLayout: React.FC<IModalProps> = ({ children, isShowed, hide, classNameLayout, classNameModal }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [switchAnimation, setSwitchAnimation] = useState(false);

  const onHide = useCallback(() => {
    setSwitchAnimation(false);
    setTimeout(() => {
      hide();
      toggleHtmlScroll(false);
    }, 250);
  }, [hide]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && e.target instanceof Element) {
        if (!modalRef.current.contains(e.target) && isShowed) {
          onHide();
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [hide, isShowed, onHide]);

  useEffect(() => {
    if (isShowed) {
      setTimeout(() => {
        setSwitchAnimation(true);
        toggleHtmlScroll(true);
      }, 0);
    }
  }, [isShowed]);

  if (!isShowed || !modalRoot) {
    return null;
  }

  return createPortal(
    <div className={classnames({ [styles.overlay]: true, [classNameLayout]: true, [styles.show]: switchAnimation })}>
      <div ref={modalRef} className={classnames({ [styles.modal]: true, [classNameModal]: true })}>
        <FontAwesomeIcon className={styles.close} icon={faTimes} size="2x" onClick={onHide} />
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default ModalLayout;
