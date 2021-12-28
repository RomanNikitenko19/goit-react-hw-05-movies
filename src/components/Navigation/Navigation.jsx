import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
const Navigation = () => {
  return (
    <>
      <nav className={s.section}>
        <div className={s.container}>
          <nav>
            <ul className={s.list}>
              <li className={s.item}>
                <NavLink exact to="/" activeClassName={s.activeLink}>
                  Home
                </NavLink>
              </li>
              <li className={s.item}>
                <NavLink to="/movies" activeClassName={s.activeLink}>
                  Movies
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
