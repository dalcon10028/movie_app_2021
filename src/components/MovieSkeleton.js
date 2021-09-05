import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
  Chip,
} from '@material-ui/core';
import { Rating, Skeleton } from '@material-ui/lab';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 15,
  },
  media: {
    height: 300,
  },
  title: {
    fontSize: 14,
  },
  genres: {
    marginTop: 7,
    marginBottom: 7,
    display: 'flex',
    '& > *': {
      marginRight: theme.spacing(1),
    },
  },
  chip: {
    // display: 'inline',
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} sm={4}>
        <Card className={classes.root}>
          <Skeleton animation="wave" variant="rect" className={classes.media} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Skeleton animation="wave" />
            </Typography>
            <Typography className={classes.title}>
              <Skeleton animation="wave" />
            </Typography>
            <Rating disabled />
            <div className={classes.genres}>
              <Skeleton
                className={classes.chip}
                variant="rect"
                width={65}
                height={24}
                animation="wave"
                component={Chip}
              />
              <Skeleton
                className={classes.chip}
                variant="rect"
                width={65}
                height={24}
                animation="wave"
                component={Chip}
              />
            </div>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="80%" />
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
