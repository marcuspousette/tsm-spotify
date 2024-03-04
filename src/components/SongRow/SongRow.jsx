import { Avatar, Box, Grid, Skeleton, Typography } from '@mui/material';
import { formatTime } from '../../utils/formatTime';

const SongRow = ({ loading, index, images, title, artist, album, duration, contextUri, position, spotifyApi }) => {
  const image = images?.length > 0 ? images[0].url : null;

  const onHandleRowClick = async () => {
    const song = { context_uri: contextUri, offset: { position: position }, position_ms: 0 };
    await spotifyApi.play(song);
  };

  return (
    <Grid
      container
      onClick={onHandleRowClick}
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
        {loading ? (
          <Skeleton variant="rectangular" width={40} height={40} />
        ) : (
          <Avatar src={image} alt={null} variant="square" />
        )}
        <Box>
          <Typography sx={{ fontSize: 16, color: 'text.primary' }}>
            {loading ? <Skeleton variant="text" width={130} height={24} /> : title}
          </Typography>
          <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>
            {loading ? <Skeleton variant="text" width={65} height={18} /> : artist}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={3} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
        {loading ? <Skeleton variant="text" width={65} height={24} /> : album}
      </Grid>
      <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        {loading ? <Skeleton variant="text" width={65} height={24} /> : formatTime(duration)}
      </Grid>
    </Grid>
  );
};

export default SongRow;
