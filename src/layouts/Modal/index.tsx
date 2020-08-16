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

const ModalLayout: React.FC<IModalProps> = observer(
  ({
    children,
    title,
    isShowed,
    hide,
    classNameLayout,
    classNameModal,
    isShowedCancelBtn,
    submitBtn,
    enctype = 'application/x-www-form-urlencoded',
    type = 'div',
  }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const { isFixed } = headerStore;

    useEffect(() => {
      const handleClick = (e: MouseEvent) => {
        const notifyEl = document.getElementsByClassName('notify-kas')[0];

        if (modalRef.current && e.target instanceof Element) {
          if (notifyEl && notifyEl.contains(e.target)) {
            return false;
          }
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

    const Container = type === 'div' ? 'div' : 'form';

    return createPortal(
      <CSSTransition nodeRef={modalRef} in={isShowed} timeout={200} unmountOnExit classNames="modal">
        <div className={classnames('modal-layout__overlay', classNameLayout)}>
          <div ref={modalRef} className={classnames('modal-layout__content', classNameModal)}>
            <Container onSubmit={submitBtn && submitBtn.handler} encType={enctype}>
              <FontAwesomeIcon className="modal-layout__close" icon={faTimes} size="2x" onClick={hide} />
              {title && <div className="modal-layout__title">{title}</div>}
              {children}
              {(submitBtn || isShowedCancelBtn) && (
                <div className="modal-layout__bottom">
                  {isShowedCancelBtn && (
                    <input className="modal-layout__button" type="button" value="Отмена" onClick={hide} />
                  )}
                  {submitBtn && <input className="modal-layout__button" type="submit" value={submitBtn.title} />}
                </div>
              )}
            </Container>
          </div>
        </div>
      </CSSTransition>,
      modalRoot
    );
  }
);

export default ModalLayout;
