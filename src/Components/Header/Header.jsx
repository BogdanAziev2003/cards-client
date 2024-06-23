import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
  return (
    <div className="header">
      <div className="header__elem">
        <Link to="/">Все Карты</Link>
      </div>
      <div className="header__elem">
        <Link to="/grev">Грев</Link>
      </div>
      <div className="header__elem">
        <Link to="/work">В работе</Link>
      </div>
      <div className="header__elem">
        <Link to="/block">Блок</Link>
      </div>
      <div className="header__elem">
        <Link to="/dead">Мертвые</Link>
      </div>
      <div className="header__elem">
        <Link to="/add">Добавить карту</Link>
      </div>
    </div>
  )
}

export default Header
