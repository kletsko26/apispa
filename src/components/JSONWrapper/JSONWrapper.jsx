import CircularProgress from "@mui/material/CircularProgress";

import { Page404 } from "@/pages/Page404/Page404";

import styles from "./JSONWrapper.module.scss";

export const JSONWrapper = ({ loading, error, children }) => {
  if (loading) {
    return (
      <div className={styles.centerLoading}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    const { status, message } = error;

    return status === 404 ? (
      <Page404 />
    ) : (
      <div className={styles.centerLoading}>
        <p>Error: {message}</p>
      </div>
    );
  }

  return children;
};
