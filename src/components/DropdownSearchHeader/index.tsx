import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import classnames from 'classnames';

import styles from './DropdownSearchHeader.module.scss';

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
    <div className={styles.wrapper}>
      <div
        className={classnames({
          [styles.button]: true,
          [styles.arrowDown]: !isOpen,
          [styles.arrowUp]: isOpen,
        })}
        ref={btnRef}
        role="button"
        onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.label}>{valueLabel || 'Выбрать категорию'}</span>
      </div>
      <div ref={listRef} className={classnames({ [styles.hide]: !isOpen, [styles.list]: true })}>
        <div role="button" onClick={() => onClickItem()} className={styles.item}>
          Без категории
        </div>
        {options.map((option) => (
          <div role="button" onClick={() => onClickItem(option.value)} className={styles.item} key={option.value}>
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownSearchHeader;
