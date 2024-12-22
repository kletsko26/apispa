import { Link } from "react-router-dom";

import styles from "./page404.module.scss";

export const Page404 = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={`${styles.text} ${styles.headling}`}>404</h1>
        <h2 className={`${styles.text} ${styles.header}`}>Page not found</h2>
        <p className={`${styles.text} ${styles.descr}`}>
          Go to page <Link to="" className={styles.link}>Albums</Link>
        </p>
      </div>
    </div>
  );
};
