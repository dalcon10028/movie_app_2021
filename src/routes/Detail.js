/* eslint-disable react/prop-types */
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Detail = ({
  location: {
    state: { year, title, summary, poster },
  },
}) => (
  <Card sx={{ display: 'flex' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
          {year}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {summary}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }} />
    </Box>
    <CardMedia
      component="img"
      image={poster}
      alt="Live from space album cover"
    />
  </Card>
);

export default Detail;
