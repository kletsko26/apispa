import { Nav } from "@components/Nav/Nav";

import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={`${styles.container} ${styles.containerHF}`}>
      <Nav />
    </header>
  );
};
