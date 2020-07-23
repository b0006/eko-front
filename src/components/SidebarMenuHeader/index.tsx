import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

import SearchHeaderMobile from '../SearchHeaderMobile';
import SwitchTypeHeaderMobile from '../SwitchTypeHeaderMobile';
import { toggleHtmlScroll } from '../../utils/html';

import './SidebarMenuHeader.scss';

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

  useEffect(() => {
    toggleHtmlScroll(isShowed);
  }, [isShowed]);

  return (
    <div className="sidebar-menu-header">
      <div
        ref={btnRef}
        role="button"
        onClick={() => setIsShowed(!isShowed)}
        className="sidebar-menu-header__menu-button">
        <FontAwesomeIcon icon={faBars} size="lg" />
        <span className="sidebar-menu-header__menu-button__label">Меню</span>
      </div>
      <div
        className={classnames({
          'sidebar-menu-header__layout': true,
          'sidebar-menu-header__show-layout': isShowed,
          'sidebar-menu-header__hide-layout': !isShowed,
        })}
      />
      <div
        ref={contentRef}
        className={classnames({ 'sidebar-menu-header__sidebar': true, 'sidebar-menu-header__show': isShowed })}>
        <div role="button" className="sidebar-menu-header__close" onClick={() => setIsShowed(false)}>
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
