import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const film = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
};
const movieTitleClickHandler = () => {};

it(`Should movie card be hover (mouse enter)`, () => {
  const onCardMouseEnter = jest.fn();

  const movieCard = shallow(
      <SmallMovieCard
        film = {film}
        onMovieTitleClick = {movieTitleClickHandler}
        onCardMouseEnter = {onCardMouseEnter}
      />
  );

  movieCard.simulate(`mouseenter`);

  expect(onCardMouseEnter).toHaveBeenCalledTimes(1);
  expect(onCardMouseEnter).toHaveBeenCalledWith(film);

  expect(onCardMouseEnter.mock.calls[0][0]).toMatchObject(film);
});
