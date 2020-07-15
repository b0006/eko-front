import React, { useRef, useEffect } from 'react';
import classnames from 'classnames';

import styles from './ModalLayout.module.scss';

interface IProps {
  isShowed: boolean;
  hide: () => void;
}

const ModalLayout: React.FC<IProps> = ({ children, isShowed, hide }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && e.target instanceof Element) {
        if (!modalRef.current.contains(e.target) && isShowed) {
          hide();
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [hide, isShowed]);

  return (
    <div className={classnames({ [styles.overlay]: true, [styles.show]: isShowed })}>
      <div ref={modalRef} className={styles.modal}>
        <input type="button" value="Закрыть" onClick={hide} />
        {children}
      </div>
    </div>
  );
};

export default ModalLayout;
