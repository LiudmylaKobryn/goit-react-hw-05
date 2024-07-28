import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const activeLink = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <header className={s.header}>
      <ul className={s.navigationList}>
        <li className={s.navigationItem}>
          <NavLink to="/" className={activeLink}>
            Home
          </NavLink>
        </li>
        <li className={s.navigationItem}>
          <NavLink to="/movies" className={activeLink}>
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
