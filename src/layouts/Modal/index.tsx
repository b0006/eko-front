import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';

import styles from './ModalLayout.module.scss';

const modalRoot = document.getElementById('modal');

interface IProps {
  isShowed: boolean;
  hide: () => void;
}

const ModalLayout: React.FC<IProps> = ({ children, isShowed, hide }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [switchAnimation, setSwitchAnimation] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && e.target instanceof Element) {
        if (!modalRef.current.contains(e.target) && isShowed) {
          setSwitchAnimation(false);
          setTimeout(() => hide(), 250);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [hide, isShowed]);

  useEffect(() => {
    if (isShowed) {
      setTimeout(() => setSwitchAnimation(true), 0);
    }
  }, [isShowed]);

  if (!isShowed || !modalRoot) {
    return null;
  }

  const Content = (
    <div className={classnames({ [styles.overlay]: true, [styles.show]: switchAnimation })}>
      <div ref={modalRef} className={styles.modal}>
        <input type="button" value="Закрыть" onClick={hide} />
        {children}
      </div>
    </div>
  );

  return createPortal(Content, modalRoot);
};

export default ModalLayout;