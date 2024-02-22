export const getAccessTokenFromStorage = () => {
  const tokenFromSessionStorage = sessionStorage.getItem('spotifyToken');
  if (tokenFromSessionStorage !== null) {
    return tokenFromSessionStorage;
  }
  return false;
};
