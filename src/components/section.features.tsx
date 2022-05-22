import React from 'react';

export default function SectionFeatures() {
  return (
      <section className="features" id="features">
          <div className="container">
              <h4 className="features__title">Характеристики</h4>
              <div className="features__inner">
                  <div className="features__items">
                      <ul className="features__list">
                          <li className="feature__title">Общие</li>
                          <li className="feature__line">
                              <p className="feature__name">Электропривод</p>
                              <p className="feature__description">мотор 250W, разгон до 25 км/ч</p>
                          </li>
                          <li className="feature__line">
                              <p className="feature__name">Производитель</p>
                              <p className="feature__description">Xiaomi</p>
                          </li>
                          <li className="feature__line">
                              <p className="feature__name">Вид</p>
                              <p className="feature__description">
                                  взрослый, дорожный, городской, электровелосипед, алюминиевая рама
                              </p>
                          </li>
                          <li className="feature__line">
                              <p className="feature__name">Колеса</p>
                              <p className="feature__description">26, двойной алюминиевый обод</p>
                          </li>
                      </ul>
                      <ul className="features__list">
                          <li className="feature__title">амортизация</li>
                          <li className="feature__line">
                              <p className="feature__name">Тип амортизации</p>
                              <p className="feature__description">амортизирующая вилка (Hard tail)</p>
                          </li>
                          <li className="feature__line">
                              <p className="feature__name">Вилка</p>
                              <p className="feature__description">пружинно-эластомерная</p>
                          </li>
                      </ul>
                      <ul className="features__list">
                          <li className="feature__title">управление</li>
                          <li className="feature__line">
                              <p className="feature__name">Руль</p>
                              <p className="feature__description">изогнутый, регулируемый подъем</p>
                          </li>
                          <li className="feature__line">
                              <p className="feature__name">Манетки</p>
                              <p className="feature__description">триггерные однорычажные, Shimano</p>
                          </li>
                      </ul>
                      <ul className="features__list">
                          <li className="feature__title">характеристика трансмиссии</li>
                          <li className="feature__line">
                              <p className="feature__name">Количество скоростей</p>
                              <p className="feature__description">7</p>
                          </li>
                          <li className="feature__line">
                              <p className="feature__name">Педали</p>
                              <p className="feature__description">классические</p>
                          </li>
                          <li className="feature__line">
                              <p className="feature__name">Передний переключатель</p>
                              <p className="feature__description">1 звезда</p>
                          </li>
                          <li className="feature__line">
                              <p className="feature__name">Задний переключатель</p>
                              <p className="feature__description">Shimano Tourney (прогулочный)</p>
                          </li>
                          <li className="feature__line">
                              <p className="feature__name">Кассета</p>
                              <p className="feature__description">7 звезд</p>
                          </li>
                      </ul>
                      <ul className="features__list">
                          <li className="feature__title">тормоза</li>
                          <li className="feature__line">
                              <p className="feature__name">Передний</p>
                              <p className="feature__description">дисковый механический</p>
                          </li>
                          <li className="feature__line">
                              <p className="feature__name">Задний</p>
                              <p className="feature__description">дисковый механический</p>
                          </li>
                          <li className="feature__line">
                              <p className="feature__name">Готовность к установке дисковых</p>
                              <p className="feature__description">рама, вилка, втулка </p>
                          </li>
                      </ul>
                      <ul className="features__list">
                          <li className="feature__title">прочее</li>
                          <li className="feature__line">
                              <p className="feature__name">Оснащение</p>
                              <p className="feature__description">электрооборудование, звонок</p>
                          </li>
                          <li className="feature__line">
                              <p className="feature__name">Вес</p>
                              <p className="feature__description">25 кг</p>
                          </li>
                      </ul>
                  </div>
                  <img className="features__img" src="images/features.jpg" alt="" />
              </div>
          </div>
      </section>
  );
}
