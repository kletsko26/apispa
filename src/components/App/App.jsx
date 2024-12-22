import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Dashboard } from "@components/Dashboard/Dashboard";
import { UsersListPage } from "@pages/UsersListPage/UsersListPage";
import { UserPage } from "@pages/UserPage/UserPage";
import { AlbumsListPage } from "@pages/AlbumsListPage/AlbumsListPage";
import { AlbumPage } from "@pages/AlbumPage/AlbumPage";
import { Page404 } from "@pages/Page404/Page404";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Dashboard />}>
          <Route path="/" element={<Navigate to="/users" />} />
          <Route path="/users" element={<UsersListPage />} />
          <Route path="/users/:userID" element={<UserPage />} />
          <Route path="/albums" element={<AlbumsListPage />} />
          <Route path="/albums/:albumID" element={<AlbumPage />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
