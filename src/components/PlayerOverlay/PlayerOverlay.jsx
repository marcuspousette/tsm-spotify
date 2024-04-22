import { Box, Button, Container, Grid, IconButton, Typography } from '@mui/material';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { KeyboardArrowDown } from '@mui/icons-material';
import PlayerControls from '../PlayerControls/PlayerControls';

const PlayerOverlay = ({ playerOverlayIsOpen, closeOverlay, player, isPaused, duration, progress, currentTrack }) => {
  return (
    <Box
      id="PlayerOverlay"
      sx={{
        width: '100%',
        height: 'calc(100vh - 75px)',
        backgroundColor: 'background.paper',
        display: { xs: 'block', md: 'none' },
        position: 'fixed',
        top: 0,
        left: 0,
        transition: 'all 0.3s',
        transform: playerOverlayIsOpen ? 'translateY(0px)' : 'translateY(100vh)'
      }}
    >
      <Container sx={{ height: '100%', background: 'linear-gradient(0deg, #121212 0%, #39D47250 100%);' }}>
        <Grid container direction="column" justifyContent="space-between" sx={{ height: '100%' }}>
          <Grid item xs={1} sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <IconButton onClick={closeOverlay} sx={{ paddingLeft: 0 }}>
              {/* <KeyboardArrowDownIcon fontSize="large" sx={{ color: 'text.primary' }} /> */}
              <KeyboardArrowDown fontSize="large" sx={{ color: 'text.primary' }} />
            </IconButton>
          </Grid>
          <Grid
            item
            xs={5}
            sx={{
              backgroundImage: `url("${currentTrack?.album.images[0].url}")`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          ></Grid>
          <Grid item xs={1}>
            <Typography sx={{ color: 'text.primary', fontSize: '28px' }}>{currentTrack?.name}</Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '18px' }}>
              {currentTrack?.artists.length > 1
                ? currentTrack.artists.map((artist) => artist.name).join(', ')
                : currentTrack?.artists[0].name}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <PlayerControls player={player} isPaused={isPaused} duration={duration} progress={progress} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PlayerOverlay;
