import { Avatar, Box, Grid, Typography } from '@mui/material';

const SongRow = ({ loading, index, images, title, artist, album, duration }) => {
  const image = images?.length > 0 ? images[0].url : null;

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
        <Typography>{index + 1}</Typography>
      </Grid>
      <Grid item sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar src={image} alt={null} variant="square" />
        <Box>
          <Typography sx={{ fontSize: 16, color: 'text.primary' }}>{title}</Typography>
          <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>{artist}</Typography>
        </Box>
      </Grid>
      <Grid item xs={3} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
        {album}
      </Grid>
      <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        {duration}
      </Grid>
    </Grid>
  );
};

export default SongRow;
