import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { AlbumsList } from "@/components/AlbumsList/AlbumsList";
import { JSONWrapper } from "@/components/JSONWrapper/JSONWrapper";
import { useJSONService } from "@/services/useJSONService";

import styles from "./userPage.module.scss";

export const UserPage = () => {
  const { loading, error, getUserByID, getUserAlbumsByUserID } =
    useJSONService();
  const [user, setUser] = useState([]);
  const [albums, setAlbums] = useState([]);
  const { userID } = useParams();

  useEffect(() => {
    getUserByID(userID).then(setUser);
    getUserAlbumsByUserID(userID).then(setAlbums);
  }, [userID]);

  return (
    <JSONWrapper loading={loading} error={error}>
      {user && (
        <div>
          <h2 className={styles.name}>{user.name}</h2>
          <p className={styles.text}>Username: {user.username}</p>
          <p className={styles.text}>
            Email:{" "}
            <a href={`mailto:${user.email}`} className={styles.link}>
              {user.email}
            </a>
          </p>
          <p className={styles.text}>
            Phone:{" "}
            <a href={`tel:${user.phone}`} className={styles.link}>
              {user.phone}
            </a>
          </p>
          <p className={styles.text}>
            Site:{" "}
            <a href={`https://${user.website}`} className={styles.link}>
              {user.website}
            </a>
          </p>
        </div>
      )}
      <div className={styles.albumWrapper}>
        <AlbumsList albums={albums} />
      </div>
    </JSONWrapper>
  );
};
