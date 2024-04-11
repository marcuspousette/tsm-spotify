import { Avatar, Box, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import PlayerControls from '../PlayerControls/PlayerControls';

const Player = ({ spotifyApi, token }) => {
  const [localPlayer, setLocalPlayer] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [device, setDevice] = useState(null);
  const [duration, setDuration] = useState(null);
  const [progress, setProgress] = useState(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Belden Player Device',
        getOAuthToken: (cb) => {
          cb(token);
        },
        volume: 0.5
      });

      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        setDevice(device_id);
        setLocalPlayer(player);
      });

      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      player.addListener('player_state_changed', (state) => {
        if (!state || !state.track_window?.current_track) {
          // console.log('disconnected');
          return;
        }

        // console.log(state);

        const duration = state.track_window.current_track.duration_ms / 1000;
        const progress = state.position / 1000;

        setDuration(duration);
        setProgress(progress);
        setIsPaused(state.paused);
        setCurrentTrack(state.track_window.current_track);

        player.getCurrentState().then((state) => {
          !state ? setActive(false) : setActive(true);
        });
      });

      player.connect();
    };
  }, []);

  useEffect(() => {
    if (!localPlayer) {
      return;
    }

    async function connect() {
      await localPlayer.connect();
    }

    connect();

    return () => {
      localPlayer.disconnect();
    };
  }, [localPlayer]);

  // useEffect(() => {
  //   const transferPlayback = async () => {
  //     if (device) {
  //       const res = await spotifyApi.getMyDevices();
  //       console.log(res);
  //       await spotifyApi.transferMyPlayback([device], false);
  //     }
  //   };
  //   transferPlayback();
  // }, [device, spotifyApi]);

  return (
    <Box>
      <Grid
        container
        px={3}
        sx={{
          backgroundColor: 'background.paper',
          height: 100,
          cursor: { xs: 'pointer', md: 'auto' },
          width: '100%',
          borderTop: '1px solid #292929'
        }}
      >
        <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <Avatar
            src={currentTrack?.album.images[0].url}
            alt={currentTrack?.album.name}
            variant="square"
            sx={{ width: 56, height: 56, marginRight: 2 }}
          />
          <Box>
            <Typography sx={{ color: 'text.primary', fontSize: 14 }}>{currentTrack?.name}</Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: 12 }}>
              {currentTrack?.artists.length > 1
                ? currentTrack.artists.map((artist) => artist.name).join(', ')
                : currentTrack?.artists[0].name}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          md={4}
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {active ? (
            <PlayerControls player={localPlayer} isPaused={isPaused} duration={duration} progress={progress} />
          ) : (
            <Box>Please transfer Playback</Box>
          )}
        </Grid>
        <Grid item xs={6} md={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          Volume
        </Grid>
      </Grid>
    </Box>
  );
};

export default Player;
