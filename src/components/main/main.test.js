import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const title = `Revenant`;
const genre = `Horror`;
const releaseYear = 1998;
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

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      title = {title}
      genre = {genre}
      releaseYear = {releaseYear}
      films = {films}
      onMovieTitleClick = {movieTitleClickHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
