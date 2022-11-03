import {
  default as React,
} from 'react';

import {
  createRoot,
} from 'react-dom/client';

import Box from '@mui/material/Box';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Box>
      Hello World
    </Box>
  </React.StrictMode>
);
