import React from 'react';
import BikeSlider from "./bike.slider";

export default function SectionBike() {
  return (
      <section className="bike">
          <div className="container">
              <div className="bike__inner">
                  <div className="bike__column">
                      <h1 className="bike__title">Xiaomi Himo C26</h1>
                      <h3 className="bike__subtitle">Электрический велосипед</h3>
                      <p className="bike__text">
                          Полная свобода передвижения и надежный транспорт для путешествий на любые расстояния
                      </p>
                      <p className="bike__text">
                          HIMO C26 – это новый электровелосипед от Xiaomi, который создан как для езды по
                          городу, так и бездорожью. Он имеет мощный двигатель и емкий аккумулятор, благодаря
                          которым способен проезжать на одном заряде до 100 км, что определенно выше, чем у
                          большинства конкурентов. А большие колеса с пневматическими шинами, дисковые
                          тормоза, 7-скоростная трансмиссия и эргономичное сидение делают каждую поездку
                          гораздо приятнее.{' '}
                      </p>
                      <a href="#product" className="bike__link">ЗАКАЗАТЬ</a>
                  </div>
                  <div className="bike__column bike__column-slider">
                      <BikeSlider />
                      <ul className="bike__list">
                          <li className="bike__list-item">
                              до 100 км
                              <span>Запас хода</span>
                          </li>
                          <li className="bike__list-item">
                              25 км/ч
                              <span>Макс корость</span>
                          </li>
                          <li className="bike__list-item">
                              3 режима езды
                              <span>механический, гибридный, электрический</span>
                          </li>
                          <li className="bike__list-item">
                              25 кг
                              <span>вес</span>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>
  );
}
