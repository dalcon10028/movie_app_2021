/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/sort-comp */
/* eslint-disable react/state-in-constructor */
import React, { useState } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Movie from '../components/Movie';
import MovieSkeleton from '../components/MovieSkeleton';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts-proxy.now.sh/list_movies.json/sort_by=rating',
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <Grid container spacing={10}>
        {isLoading ? (
          <>
            <MovieSkeleton />
            <MovieSkeleton />
            <MovieSkeleton />
            <MovieSkeleton />
            <MovieSkeleton />
            <MovieSkeleton />
          </>
        ) : (
          <>
            {movies.map((movie) => (
              <Grid item xs={12} sm={4} key={movie.id}>
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                  rating={movie.rating}
                />
              </Grid>
            ))}
          </>
        )}
      </Grid>
    );
  }
}

export default App;
