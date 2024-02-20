import './App.css';
import { Stack, Button, Box } from '@mui/material';
import Login from './pages/Login';

function App({ spotifyApi }) {
  return (
    <Box className="App">
      <Login />
    </Box>
  );
}

export default App;
