import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { JSONWrapper } from "@/components/JSONWrapper/JSONWrapper";
import { useJSONService } from "@/services/useJSONService";

import styles from "./usersListPage.module.scss";

export const UsersListPage = () => {
  const { loading, error, getUsers } = useJSONService();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <JSONWrapper loading={loading} error={error}>
      <div>
        <ul>
          {users.map(({ id, name }) => (
            <li key={id}>
              <Link to={`/users/${id}`} className={styles.link}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </JSONWrapper>
  );
};
