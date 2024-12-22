import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer
      className={`${styles.container} ${styles.containerHF} ${styles.footer}`}>
      <div className={styles.item}>Created by: Luba Klecko</div>
      <div className={styles.item}>BSU: 2024</div>
    </footer>
  );
};
