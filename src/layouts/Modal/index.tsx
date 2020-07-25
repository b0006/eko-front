import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { observer } from 'mobx-react-lite';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { toggleHtmlScroll } from '../../utils/html';
import { headerStore } from '../../mobx';

import { IModalProps } from './interfaces';
import './ModalLayout.scss';

const modalRoot = document.getElementById('modal');

const ModalLayout: React.FC<IModalProps> = observer(({ children, isShowed, hide, classNameLayout, classNameModal }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { isFixed } = headerStore;

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
      toggleHtmlScroll(true, isFixed);
    } else {
      setTimeout(() => toggleHtmlScroll(false, isFixed), 200);
    }
  }, [isShowed, isFixed]);

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <CSSTransition nodeRef={modalRef} in={isShowed} timeout={200} unmountOnExit classNames="modal">
      <div className={classnames('modal-layout__overlay', classNameLayout)}>
        <div ref={modalRef} className={classnames('modal-layout__content', classNameModal)}>
          <FontAwesomeIcon className="modal-layout__close" icon={faTimes} size="2x" onClick={hide} />
          {children}
        </div>
      </div>
    </CSSTransition>,
    modalRoot
  );
});

export default ModalLayout;
