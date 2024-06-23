import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import React from 'react';

function Header() {
  const location = useLocation();

  return (
    <div className="header">
      <div className="header__elem">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Все Карты
        </Link>
      </div>
      <div className="header__elem">
        <Link
          to="/grev"
          className={location.pathname === '/grev' ? 'active' : ''}
        >
          Грев
        </Link>
      </div>
      <div className="header__elem">
        <Link
          to="/work"
          className={location.pathname === '/work' ? 'active' : ''}
        >
          В работе
        </Link>
      </div>
      <div className="header__elem">
        <Link
          to="/block"
          className={location.pathname === '/block' ? 'active' : ''}
        >
          Блок
        </Link>
      </div>
      <div className="header__elem">
        <Link
          to="/dead"
          className={location.pathname === '/dead' ? 'active' : ''}
        >
          Мертвые
        </Link>
      </div>
      <div className="header__elem">
        <Link
          to="/add"
          className={location.pathname === '/add' ? 'active' : ''}
        >
          Добавить карту
        </Link>
      </div>
    </div>
  );
}

export default Header;
