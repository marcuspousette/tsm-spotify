import { Box, Button } from '@mui/material';
import { accessURL, authEndpoint, clientId, liveURL, devURL, scopes } from '../config/config';

const Login = () => {
  const accessUrl1 = `${authEndpoint}?client_id=${clientId}&redirect_uri=${
    import.meta.env.PROD ? liveURL : devURL
  }&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
  const accessUrl2 = `${authEndpoint}?client_id=${clientId}&redirect_uri=${
    import.meta.env.MODE === 'production' ? liveURL : devURL
  }&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <img src="/Spotify_Logo.png" alt="Spotify Logo" style={{ marginBottom: 300, width: '70%', maxWidth: 500 }} />
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Button color="primary" size="large" variant="contained" href={accessURL}>
          Login to Spotify (Old)
        </Button>
        <Button color="primary" size="large" variant="contained" href={accessUrl1}>
          Login to Spotify (Test 1)
        </Button>
        <Button color="primary" size="large" variant="contained" href={accessUrl2}>
          Login to Spotify (Test 2)
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
