import { Avatar, Box, Grid, Typography } from '@mui/material';

const Player = ({ spotifyApi }) => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          Image, Title, Artist
        </Grid>
        <Grid
          item
          md={4}
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          Player-controls
        </Grid>
        <Grid item xs={6} md={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          Volume
        </Grid>
      </Grid>
    </Box>
  );
};

export default Player;
