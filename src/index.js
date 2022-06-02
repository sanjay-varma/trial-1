import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Comp2 from './comp-2';
import Comp3 from './comp-3';
import { Grid, Box, Paper, styled } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            <Comp2 />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Comp3 />
          </Item>
        </Grid>
      </Grid>
    </Box>
  </React.StrictMode>
);

