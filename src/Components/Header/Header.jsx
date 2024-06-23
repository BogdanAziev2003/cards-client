import { Link, useLocation } from "react-router-dom"
import "./Header.css"
import React, { useState } from "react"

function Header() {
  const [isBurger, setBurger] = useState(false)

  const location = useLocation()

  return (
    <div className="header">
      <div className={isBurger ? "header__wrapper active" : "header__wrapper"}>
        <div className="header__close" onClick={() => setBurger(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#fff"
          >
            <path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" />
          </svg>
        </div>
        <div className="header__elem">
          <Link
            onClick={() => setBurger(false)}
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            Все Карты
          </Link>
        </div>
        <div className="header__elem">
          <Link
            onClick={() => setBurger(false)}
            to="/grev"
            className={location.pathname === "/grev" ? "active" : ""}
          >
            Грев
          </Link>
        </div>
        <div className="header__elem">
          <Link
            onClick={() => setBurger(false)}
            to="/work"
            className={location.pathname === "/work" ? "active" : ""}
          >
            В работе
          </Link>
        </div>
        <div className="header__elem">
          <Link
            onClick={() => setBurger(false)}
            to="/block"
            className={location.pathname === "/block" ? "active" : ""}
          >
            Блок
          </Link>
        </div>
        <div className="header__elem">
          <Link
            onClick={() => setBurger(false)}
            to="/dead"
            className={location.pathname === "/dead" ? "active" : ""}
          >
            Мертвые
          </Link>
        </div>
        <div className="header__elem">
          <Link
            onClick={() => setBurger(false)}
            to="/add"
            className={location.pathname === "/add" ? "active" : ""}
          >
            Добавить карту
          </Link>
        </div>
      </div>
      <div className="header__logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQrHlZ6Yu4O0oAzk-a17lFj0Q74PyrhMq9g&s"
          alt="logo"
        />
      </div>
      <div className="header__burger" onClick={() => setBurger(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          fill="white"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </div>
    </div>
  )
}

export default Header
