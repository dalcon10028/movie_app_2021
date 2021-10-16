/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  makeStyles,
  Typography,
} from '@material-ui/core';

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
    '& > *': {
      marginRight: theme.spacing(1),
    },
  },
}));

const Movie = ({ id, year, title, summary, poster, genres, rating }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={20}>
      <CardActionArea
        component={Link}
        to={{
          pathname: '/movie-detail',
          state: { id, year, title, summary, poster, genres, rating },
        }}
      >
        <CardMedia className={classes.media} image={poster} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {year}
          </Typography>
          <Rating
            name="half-rating-read"
            defaultValue={rating / 2}
            precision={0.1}
            readOnly
          />
          <div className={classes.genres}>
            {genres.map((genre) => (
              <Chip label={genre} color="primary" size="small" />
            ))}
          </div>
          <Typography variant="body2" color="textSecondary" component="p">
            {summary.slice(0, 100)}...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
