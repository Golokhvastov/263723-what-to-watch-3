import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const title = `Some title`;
const genre = `Some genre`;
const releaseYear = 2030;
const films = [{
  title: `Bohemian Rhapsody`,
  img: `img/bohemian-rhapsody.jpg`,
},
{
  title: `Revenant`,
  img: `img/revenant.jpg`,
},];
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
