import React from 'react';

import styles from './MainStartBlock.module.scss';

const MainStartBlock: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.gradient}>
        <div className={styles.content}>
          <h1>ЭкоСнеки</h1>
          <h2>Фруктовые чипсы, фермерская пастила и другие лакомства</h2>
          <ul className={styles.list}>
            <li>100% натуральный продукт</li>
            <li>без сахара, красителей и консервантов</li>
            <li>сохраняем до 97% витаминов</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainStartBlock;
