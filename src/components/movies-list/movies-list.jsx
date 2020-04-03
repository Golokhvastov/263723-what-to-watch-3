import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

const MoviesList = (props) => {
  const {films, onMovieTitleClick} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film, index) => (
        <SmallMovieCard
          key={film + index}
          film = {film}
          onMovieTitleClick = {onMovieTitleClick}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string,
      })
  ),
  onMovieTitleClick: PropTypes.func.isRequired
};

export default MoviesList;
