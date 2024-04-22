import { Box, Button, Container, Grid, IconButton } from '@mui/material';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { KeyboardArrowDown } from '@mui/icons-material';

const PlayerOverlay = ({ playerOverlayIsOpen, closeOverlay }) => {
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
        </Grid>
      </Container>
    </Box>
  );
};

export default PlayerOverlay;
