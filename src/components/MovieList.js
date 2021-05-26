import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

export default class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((movie, index) => <MovieCard movie={ movie } key={ index } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
