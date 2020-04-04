import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";

const films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  },
  {
    title: `Macbeth`,
    img: `img/macbeth.jpg`,
  },
  {
    title: `What We Do in the Shadows`,
    img: `img/what-we-do-in-the-shadows.jpg`,
  }
];
const movieTitleClickHandler = () => {};

it(`Render MoviesList`, () => {
  const tree = renderer
    .create(<MoviesList
      films = {films}
      onMovieTitleClick = {movieTitleClickHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
