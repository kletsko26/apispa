import { useState, useEffect } from "react";

import { AlbumsList } from "@/components/AlbumsList/AlbumsList";
import { JSONWrapper } from "@/components/JSONWrapper/JSONWrapper";
import { useJSONService } from "@/services/useJSONService";

export const AlbumsListPage = () => {
  const { loading, error, getAlbums } = useJSONService();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums().then(setAlbums);
  }, []);

  return (
    <JSONWrapper loading={loading} error={error}>
      <AlbumsList albums={albums} />
    </JSONWrapper>
  );
};
