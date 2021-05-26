import React from 'react';
import PropTypes from 'prop-types';

export default class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, ratingname } = this.props.movie;
    return (
    <div>
      <img src={ imagePath }></img>
      <h4>{ title }</h4>
    </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    ratingname: PropTypes.number,
  }).isRequired,
};
