import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const films = [`Fantastic Beasts`];

it(`Should movie title be clicked`, () => {
  const onMovieTitleClick = jest.fn();

  const mainPage = shallow(
      <Main
        title = {`The Grand Budapest Hotel`}
        genre = {`Drama`}
        releaseYear = {1014}
        films = {films}
        onMovieTitleClick = {onMovieTitleClick}
      />
  );

  const movieTitle = mainPage.find(`.small-movie-card__title`);

  movieTitle.props().onClick();

  expect(onMovieTitleClick.mock.calls.length).toBe(1);
});
