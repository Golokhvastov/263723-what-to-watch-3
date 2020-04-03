import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const films = [{
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
}];

it(`Should movie title be clicked`, () => {
  const onMovieTitleClick = jest.fn();

  const mainPage = mount(
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
