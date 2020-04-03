import React from "react";
import PropTypes from "prop-types";

const SmallMovieCard = (props) => {
  const {film, onMovieTitleClick, onCardMouseEnter} = props;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={onCardMouseEnter}>
      <div className="small-movie-card__image">
        <img src={film.img} alt={film.title} width="280" height="175" />
      </div>
      <h3 onClick={onMovieTitleClick} className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{film.title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string,
  }).isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
  onCardMouseEnter: PropTypes.func.isRequired
};

export default SmallMovieCard;
