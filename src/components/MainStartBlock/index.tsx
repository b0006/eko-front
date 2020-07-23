import React from 'react';

import './MainStartBlock.scss';

const MainStartBlock: React.FC = () => {
  return (
    <section className="main-start-block">
      <div className="main-start-block__gradient">
        <div className="main-start-block__content">
          <h1>ЭкоСнеки</h1>
          <h2>Фруктовые чипсы, фермерская пастила и другие лакомства</h2>
          <ul className="main-start-block__content__list">
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
