import { Box, Divider, Grid } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SongRow from '../SongRow/SongRow';

const SongTable = ({ songs, loading, spotifyApi }) => {
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
      <SongRow
        loading={false}
        index={0 + 0}
        images={null}
        title={'l33t'}
        artist={'l33t'}
        album={'l33t'}
        duration="13:37"
      />
      <SongRow
        loading={loading}
        index={0 + 1}
        images={null}
        title={'l33t'}
        artist={'l33t'}
        album={'l33t'}
        duration="13:37"
      />
      <SongRow
        loading={true}
        index={0 + 2}
        images={null}
        title={'l33t'}
        artist={'l33t'}
        album={'l33t'}
        duration="13:37"
      />
    </Box>
  );
};

export default SongTable;