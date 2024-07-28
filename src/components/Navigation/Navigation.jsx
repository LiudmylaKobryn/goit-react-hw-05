import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? s.active : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? s.active : "")}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
