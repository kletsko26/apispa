import { Outlet } from "react-router-dom";

import { Header } from "@components/Header/Header";
import { Footer } from "@components/Footer/Footer";

import styles from "./dashboard.module.scss";

export const Dashboard = () => {
  return (
    <div className={styles.gridInterface}>
      <Header />
      <main className={styles.scrollableContent}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};
