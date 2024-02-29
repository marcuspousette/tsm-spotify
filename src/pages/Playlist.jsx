import { Box, Avatar, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Playlist = ({ spotifyApi, token }) => {
  const [playlistInfo, setPlaylistInfo] = useState(null);
  const [songs, setSongs] = useState([]);
  const { id } = useParams();

  const formatSongs = (items) =>
    items.map((item, index) => {
      const { track } = item;
      track.contextUri = `spotify:playlist:${id}`;
      track.position = index;
      return track;
    });

  useEffect(() => {
    const getData = async () => {
      try {
        const playlistDetails = await spotifyApi.getPlaylist(id);
        setPlaylistInfo({
          name: playlistDetails.body.name,
          image: playlistDetails.body.images[1]?.url
            ? playlistDetails.body.images[1].url
            : playlistDetails.body.images[0].url
        });
        const { items } = playlistDetails.body.tracks;
        const formattedSongs = formatSongs(items);
        setSongs(formattedSongs);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [id]);

  return (
    <Box id="Playlist__page" sx={{ bgcolor: 'background.paper', flex: 1, overflowY: 'auto' }}>
      <Box
        p={{ xs: 3, md: 4 }}
        sx={{
          width: '100%',
          background: 'linear-gradient(0deg, #121212 0%, #1bd76060 100%);',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: { xs: 'flex-start', md: 'flex-end', xl: 'center' },
          gap: 3,
          boxSizing: 'border-box',
          flexDirection: { xs: 'column', md: 'row' }
        }}
      >
        <Avatar
          src={playlistInfo?.image}
          alt={playlistInfo?.name}
          variant="square"
          sx={{ boxShadow: 15, width: { xs: '100%', md: 235 }, height: { xs: '100%', md: 235 } }}
        />
        <Box>
          <Typography sx={{ fontSize: 12, fontWeight: 'bold', color: 'text.primary' }}>Playlist</Typography>
          <Typography sx={{ fontSize: { xs: 42, md: 72 }, fontWeight: 'bold', color: 'text.primary' }}>
            {playlistInfo?.name}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Playlist;
