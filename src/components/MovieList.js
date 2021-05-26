import React from 'react';
import MovieCard from './MovieCard';

export default class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
    <div>
      {movies.map((movie) => <MovieCard movie={movie} />)}
    </div>
    );
  }
}
