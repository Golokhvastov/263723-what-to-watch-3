import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const title = `Revenant`;
const genre = `Horror`;
const releaseYear = 1998;
const films = [`Pulp Fiction`, `No Country for Old Men`, `Snatch`];
const movieTitleClickHandler = () => {};

it(`Render App`, () => {
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
