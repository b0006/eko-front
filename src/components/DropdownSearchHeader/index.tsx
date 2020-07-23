import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './DropdownSearchHeader.scss';

interface IProps {
  onChange(val?: string): void;
  options: { value: string; label: string }[];
  value?: string;
}

const DropdownSearchHeader: React.FC<IProps> = ({ value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  const handleClick = useCallback((e: MouseEvent) => {
    if (btnRef.current && listRef.current && e.target instanceof Element) {
      if (!btnRef.current.contains(e.target) && !listRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, isOpen]);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [handleClick, isOpen]);

  const valueLabel = useMemo(() => options.find((o) => o.value === value)?.label, [options, value]);

  const onClickItem = (val?: string) => {
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-search-header">
      <div className="dropdown-search-header__button" ref={btnRef} role="button" onClick={() => setIsOpen(!isOpen)}>
        <span className="dropdown-search-header__button__label">{valueLabel || 'Выбрать категорию'}</span>
        <FontAwesomeIcon
          className={isOpen ? 'dropdown-search-header__rotateDown' : 'dropdown-search-header__rotateUp'}
          icon={faChevronDown}
        />
      </div>
      <div
        ref={listRef}
        className={classnames({ 'dropdown-search-header__show': isOpen, 'dropdown-search-header__list': true })}>
        <div role="button" onClick={() => onClickItem()} className="dropdown-search-header__list__item">
          Без категории
        </div>
        {options.map((option) => (
          <div
            role="button"
            onClick={() => onClickItem(option.value)}
            className="dropdown-search-header__list__item"
            key={option.value}>
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownSearchHeader;
