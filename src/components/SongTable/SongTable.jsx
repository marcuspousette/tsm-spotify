import { Box, Divider, Grid } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SongRow from '../SongRow/SongRow';

const SongTable = ({ songs, loading, spotifyApi }) => {
  const renderSongs = () => {
    if (loading) {
      return Array.from({ length: Math.max(songs.length, 5) }, (_, index) => (
        <SongRow loading={loading} index={index} images={null} key={index} />
      ));
    }

    return songs.map((song, index) => (
      <SongRow
        loading={loading}
        index={index}
        images={song.album.images}
        title={song.name}
        artist={song.artists.length > 1 ? song.artists.map((artist) => artist.name).join(', ') : song.artists[0].name}
        album={song.album.name}
        duration={song.duration_ms / 1000}
        key={index}
      />
    ));
  };

  return (
    <Box
      p={{ xs: 3, md: 4 }}
      sx={{
        flex: 1,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Grid container px={2} py={1} sx={{ width: '100%', color: 'text.secondary', fontSize: 14 }}>
        <Grid item sx={{ width: 35, display: 'flex', alignItems: 'center' }}>
          #
        </Grid>
        <Grid item sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          Title
        </Grid>
        <Grid item xs={3} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          Album
        </Grid>
        <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <AccessTimeIcon sx={{ width: 20, height: 20 }} />
        </Grid>
      </Grid>
      <Box pb={2}>
        <Divider sx={{ width: '100%', height: 1 }} />
      </Box>
      {renderSongs()}
    </Box>
  );
};

export default SongTable;
