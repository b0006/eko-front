import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

import SearchHeaderMobile from '../SearchHeaderMobile';
import SwitchTypeHeaderMobile from '../SwitchTypeHeaderMobile';

import styles from './SidebarMenuHeader.module.scss';

const SidebarMenuHeader: React.FC = () => {
  const [isShowed, setIsShowed] = useState(false);

  const btnRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (btnRef.current && contentRef.current && e.target instanceof Element) {
        if (!btnRef.current.contains(e.target) && !contentRef.current.contains(e.target)) {
          setIsShowed(false);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div ref={btnRef} role="button" onClick={() => setIsShowed(!isShowed)} className={styles.menuButton}>
        <FontAwesomeIcon icon={faBars} size="lg" />
        <span className={styles.label}>Меню</span>
      </div>
      <div
        className={classnames({
          [styles.layout]: true,
          [styles.showLayout]: isShowed,
          [styles.hideLayout]: !isShowed,
        })}
      />
      <div ref={contentRef} className={classnames({ [styles.sidebar]: true, [styles.show]: isShowed })}>
        <div role="button" className={styles.close} onClick={() => setIsShowed(false)}>
          <FontAwesomeIcon icon={faChevronCircleLeft} size="2x" />
          <span>Закрыть</span>
        </div>
        <SearchHeaderMobile />
        <SwitchTypeHeaderMobile hideSidebar={() => setIsShowed(false)} />
      </div>
    </div>
  );
};

export default SidebarMenuHeader;
