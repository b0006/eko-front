import React, { useRef, useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { toggleHtmlScroll } from '../../utils/html';

import { IModalProps } from './interfaces';
import './ModalLayout.scss';

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

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
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
    <div
      className={classnames({
        'modal-layout__overlay': true,
        [classNameLayout]: true,
        'modal-layout__show': switchAnimation,
      })}>
      <div ref={modalRef} className={classnames({ 'modal-layout__content': true, [classNameModal]: true })}>
        <FontAwesomeIcon className="modal-layout__content__close" icon={faTimes} size="2x" onClick={onHide} />
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default ModalLayout;
