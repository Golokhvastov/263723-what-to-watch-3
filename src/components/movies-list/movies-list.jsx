import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

export default class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeSmallMovieCard: null
    };

    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
  }

  _handleCardMouseEnter(film) {
    this.setState({activeSmallMovieCard: film});
  }

  render() {
    const {films, onMovieTitleClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, index) => (
          <SmallMovieCard
            key={film + index}
            film = {film}
            onMovieTitleClick = {onMovieTitleClick}
            onCardMouseEnter = {this._handleCardMouseEnter}
          />
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string,
      })
  ),
  onMovieTitleClick: PropTypes.func.isRequired
};
