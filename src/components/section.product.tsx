import React from 'react';

export default function SectionProduct() {
  return (
    <section className="product" id="product">
      <div className="container">
        <div className="product__inner">
          <form className="form">
            <h4 className="form__title">Заказать</h4>
            <p className="form__text">
              Если Вы хотите заказать велосипед, оставьте свой контакт и наш менеджер перезвонит вам
              в ближайшее время
            </p>
            <input className="form__input-name" type="text" placeholder="имя" />
            <input className="form__input-phone" type="tel" placeholder="телефон" />
            <p className="form__text-color">выберите желаемый цвет</p>
            <div className="form__label-box">
              <label className="form__label">
                <input className="form__input-radio" type="radio" name="radio" />
                <div className="form__bike">
                  <img className="form__bike-img" src="images/bikes/gray.jpg" alt="" />
                  <p className="form__bike-price">33999</p>
                </div>
                <div className="form__radio-style form__radio-style--gray"></div>
              </label>
              <label className="form__label">
                <input className="form__input-radio" type="radio" name="radio" checked />
                <div className="form__bike">
                  <img className="form__bike-img" src="images/bikes/white.jpg" alt="" />
                  <p className="form__bike-price">32999</p>
                </div>
                <div className="form__radio-style form__radio-style--white"></div>
              </label>
              <label className="form__label">
                <input className="form__input-radio" type="radio" name="radio" />
                <div className="form__bike">
                  <img className="form__bike-img" src="images/bikes/red.jpg" alt="" />
                  <p className="form__bike-price">34999</p>
                </div>
                <div className="form__radio-style form__radio-style--red"></div>
              </label>
            </div>
            <button className="form__btn" type="submit">
              ЗАКАЗАТЬ
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
