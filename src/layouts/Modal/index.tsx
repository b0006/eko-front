import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { toggleHtmlScroll } from '../../utils/html';

import { IModalProps } from './interfaces';
import './ModalLayout.scss';

const modalRoot = document.getElementById('modal');

const ModalLayout: React.FC<IModalProps> = ({ children, isShowed, hide, classNameLayout, classNameModal }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && e.target instanceof Element) {
        if (!modalRef.current.contains(e.target) && isShowed) {
          hide();
        }
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [hide, isShowed]);

  useEffect(() => {
    if (isShowed) {
      toggleHtmlScroll(true);
    } else {
      setTimeout(() => toggleHtmlScroll(false), 200);
    }
  }, [isShowed]);

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <CSSTransition in={isShowed} timeout={200} unmountOnExit classNames="modal">
      <div className={classnames({ 'modal-layout__overlay': true, [classNameLayout]: true })}>
        <div ref={modalRef} className={classnames('modal-layout__content', classNameModal)}>
          <FontAwesomeIcon className="modal-layout__content__close" icon={faTimes} size="2x" onClick={hide} />
          {children}
        </div>
      </div>
    </CSSTransition>,
    modalRoot
  );
};

export default ModalLayout;
