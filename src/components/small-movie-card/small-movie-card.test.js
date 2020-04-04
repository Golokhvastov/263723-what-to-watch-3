import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";

const film = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
};
const movieTitleClickHandler = () => {};
const cardMouseEnterHandler = () => {};

it(`Render SmallMovieCard`, () => {
  const tree = renderer
    .create(<SmallMovieCard
      film = {film}
      onMovieTitleClick = {movieTitleClickHandler}
      onCardMouseEnter = {cardMouseEnterHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
