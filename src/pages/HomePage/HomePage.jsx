import { NavLink, Outlet } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <ul className={s.buttonsList}>
        <li className={s.buttonsItem}>
          <NavLink to="popularofday">Movies of the Day</NavLink>
        </li>
        <li className={s.buttonsItem}>
          <NavLink to="popularofweek">Movies of the Week</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default HomePage;
