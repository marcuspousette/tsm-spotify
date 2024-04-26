import { useState, useEffect } from 'react';
import { Box, Divider } from '@mui/material';
import NavItem from '../NavItem/NavItem';
import HomeIcon from '@mui/icons-material/Home';
import NavPlaylist from '../NavPlaylist/NavPlaylist';

const SideNav = ({ spotifyApi, token }) => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPlaylists() {
      try {
        if (!spotifyApi) return;
        const data = await spotifyApi.getUserPlaylists();
        setPlaylists(data.body.items);
        setLoading(false);
        console.log(spotifyApi);
        console.log('Data body items: ', data.body.items);
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    }
    getPlaylists();
  }, [spotifyApi, token]);

  const renderPlaylists = () => {
    if (loading) {
      return Array.from({ length: Math.max(playlists.length, 10) }, (_, index) => (
        <NavPlaylist loading={loading} key={index} />
      ));
    }

    return playlists.map((playlist, index) => {
      console.log(index, playlist.name, playlist.id);
      return <NavPlaylist name={playlist.name} id={playlist.id} loading={loading} key={index} />;
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        width: 230,
        height: '100%',
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column'
      }}
    >
      <Box p={3}>
        <img src="/Spotify_Logo.png" alt="Spotify Logo" width={'75%'} />
      </Box>
      <NavItem name="Home" Icon={HomeIcon} target="/" />
      <Box px={3} py={1}>
        <Divider sx={{ backgroundColor: '#ffffff40' }} />
      </Box>
      <Box
        sx={{
          overflowY: 'auto',
          flex: 1
        }}
      >
        {renderPlaylists()}
      </Box>
    </Box>
  );
};

export default SideNav;
