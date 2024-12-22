import { Link, useLocation } from "react-router-dom";

import NAVLINKS from "@constants/navlinks";

import styles from "./nav.module.scss";

export const Nav = () => {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <ul className={styles.linksList}>
        {NAVLINKS.map(({ path, name }, i) => {
          let style = styles.linkWrapper;
          if (location.pathname.includes(path))
            style += ` ${styles.activeLink}`;

          return (
            <li key={i} className={style}>
              <Link to={path}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
