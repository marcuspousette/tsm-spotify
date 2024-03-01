import { Box, Grid } from '@mui/material';

const SongTable = ({}) => {
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
          Time
        </Grid>
      </Grid>
    </Box>
  );
};

export default SongTable;
