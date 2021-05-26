import React from 'react';

export default class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return <p>{ rating }</p>;
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
