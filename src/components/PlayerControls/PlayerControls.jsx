import { Box, IconButton, Slider, Stack, Typography } from '@mui/material';
import { formatTime } from '../../utils/formatTime';
import { Pause, PlayArrow, SkipNext, SkipPrevious } from '@mui/icons-material';
import { useState } from 'react';

const PlayerControls = ({ player, isPaused, duration, progress }) => {
  const skipStyle = { width: 28, height: 28 };
  const playStyle = { width: 38, height: 38 };
  return (
    <Stack direction="column" spacing={2} justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
      <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
        <IconButton size="small" sx={{ color: 'text.primary' }}>
          <SkipPrevious sx={skipStyle} />
        </IconButton>
        <IconButton size="small" sx={{ color: 'text.primary' }}>
          {isPaused ? <PlayArrow sx={playStyle} /> : <Pause sx={playStyle} />}
        </IconButton>
        <IconButton size="small" sx={{ color: 'text.primary' }}>
          <SkipNext sx={skipStyle} />
        </IconButton>
      </Stack>
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ width: '75%' }}>
        <Typography sx={{ color: 'text.secondary', fontSize: 12 }}>{formatTime(progress)}</Typography>
        <Slider size="medium" value={progress} min={0} max={duration} />
        <Typography sx={{ color: 'text.secondary', fontSize: 12 }}>{formatTime(duration)}</Typography>
      </Stack>
    </Stack>
  );
};

export default PlayerControls;
