import useHttp from "@/hooks/useHttp";

export const useJSONService = () => {
  const _apiBase = "https://jsonplaceholder.typicode.com";

  const { request, loading, error, clearError } = useHttp();

  const getUsers = async () => {
    const res = await request(`${_apiBase}/users`);
    return res;
  };

  const getUserByID = async (id) => {
    const res = await request(`${_apiBase}/users/${id}`);
    return res;
  };

  const getAlbums = async () => {
    const res = await request(`${_apiBase}/albums`);
    return res;
  };

  const getUserAlbumsByUserID = async (id) => {
    const res = await request(`${_apiBase}/albums`);
    return res.filter((alb) => alb.userId === +id);
  };

  const getAlbumDataByID = async (id) => {
    const albumData = await request(`${_apiBase}/albums/${id}`);
    const { userId } = albumData;
    const { name } = await getUserByID(userId);
    const photos = await request(`${_apiBase}/albums/${id}/photos`);
    return {
      ...albumData,
      authorName: name,
      photos,
    };
  };

  return {
    loading,
    error,
    clearError,
    getUsers,
    getUserByID,
    getAlbums,
    getUserAlbumsByUserID,
    getAlbumDataByID,
  };
};
