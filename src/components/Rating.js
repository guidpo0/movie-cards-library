import React from 'react';

export default class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return <p className="rating">{ rating }</p>;
  }
}

Rating.defaultProps = {
  rating: 0,
};
