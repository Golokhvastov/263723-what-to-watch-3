import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const title = `Some title`;
const genre = `Some genre`;
const releaseYear = 2030;
const films = [`Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows`];
const movieTitleClickHandler = () => {};

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      title = {title}
      genre = {genre}
      releaseYear = {releaseYear}
      films = {films}
      onMovieTitleClick = {movieTitleClickHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
