import { Box, Button } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 5
      }}
    >
      <img src="/TA-logo.png" alt="Kristopher Hellsten" style={{ maxWidth: '50%', maxHeight: '50%' }} />
      <Button size="large" variant="contained" href="mailto:kristopherhellsten.se@gmail.com">
        Contact me
      </Button>
    </Box>
  );
};

export default Home;
