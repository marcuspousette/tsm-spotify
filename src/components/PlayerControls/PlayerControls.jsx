import { Box, IconButton, Slider, Stack, Typography } from '@mui/material';
import { formatTime } from '../../utils/formatTime';
import { Pause, PlayArrow, SkipNext, SkipPrevious } from '@mui/icons-material';
import { useState } from 'react';

const PlayerControls = ({ player, isPaused, duration, progress }) => {
  return (
    <Stack direction={'column'} spacing={2} justify="center" alignItems="center" sx={{ width: '100%' }}>
      <Stack>Play knapparna</Stack>
      <Stack>Progress/Slider</Stack>
    </Stack>
  );
};

export default PlayerControls;
