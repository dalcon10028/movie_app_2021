/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/sort-comp */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Movie from '../components/Movie';

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
          'Loading'
        ) : (
          <>
            {movies.map((movie) => (
              <Grid item xs={12} sm={4}>
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
      // <section className="container">
      //   {isLoading ? (
      //     <div className="loader">
      //       <span className="loader__text">Loading...</span>
      //     </div>
      //   ) : (
      //     <div className="movies">
      //       {movies.map((movie) => (
      //         <Movie
      //           key={movie.id}
      //           id={movie.id}
      //           year={movie.year}
      //           title={movie.title}
      //           summary={movie.summary}
      //           poster={movie.medium_cover_image}
      //           genres={movie.genres}
      //         />
      //       ))}
      //     </div>
      //   )}
      // </section>
    );
  }
}

export default App;