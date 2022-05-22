import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a href="#" className="logo">
            <img className="logo_img" src="images/logo.jpg" alt="logo" />
          </a>
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__item">
                <a href="#info" className="menu__link">
                  Описание
                </a>
              </li>
              <li className="menu__item">
                <a href="#features" className="menu__link">
                  Характеристики
                </a>
              </li>
              <li className="menu__item">
                <a href="#product" className="menu__link">
                  Стоимость
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
