import { Link } from "react-router-dom";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

import styles from "./albumsList.module.scss";

export const AlbumsList = ({ albums }) => {
  return (
    <div>
      <h3 className={styles.headling}>Albums</h3>
      <ul>
        {albums &&
          albums.map(({ id, title }) => (
            <li key={id} className={styles.albumItem}>
              <PhotoLibraryIcon />
              <Link
                to={`/albums/${id}`}
                className={`${styles.link} ${styles.albumLink}`}>
                <p>{title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
