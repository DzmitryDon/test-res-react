import { Link } from "react-router-dom";

export const Header = () => (
  <header>
    <ul>
      <li>
        <Link to="/">Главная</Link>
      </li>
      <li>
        <Link to="/employees">Сотрудники</Link>
      </li>
    </ul>
  </header>
);
