import { Avatar, Box, Grid, Typography } from '@mui/material';

const SongRow = ({}) => {
  return (
    <Grid
      container
      px={2}
      py={1}
      sx={{
        width: '100%',
        color: 'text.secondary',
        fontSize: 14,
        cursor: 'pointer',
        '&:hover': { backgroundColor: '#ffffff10' }
      }}
    >
      <Grid item sx={{ width: 35, display: 'flex', alignItems: 'center', fontSize: 16 }}>
        {/* Position */}
        <Typography>1</Typography>
      </Grid>
      <Grid item sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* Title */}
        <Avatar src={null} alt={null} variant="square" />
        <Box>
          <Typography sx={{ fontSize: 16, color: 'text.primary' }}>L33t Song</Typography>
          <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>L33t</Typography>
        </Box>
      </Grid>
      <Grid item xs={3} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
        {/* Album */}
        L33t Album
      </Grid>
      <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        {/* Duration */}
        13:37
      </Grid>
    </Grid>
  );
};

export default SongRow;
