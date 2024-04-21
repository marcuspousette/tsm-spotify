import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { Home, List } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MobileNav = () => {
  const nav = useNavigate();
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, value) => setValue(value)}
        sx={{ backgroundColor: 'background.paper', color: 'text.secondary' }}
      >
        <BottomNavigationAction label="Home" icon={<Home />} onClick={() => nav('/')} />
        <BottomNavigationAction label="Library" icon={<List />} onClick={() => nav('/library')} />
      </BottomNavigation>
    </Box>
  );
};

export default MobileNav;
