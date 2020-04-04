import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import films from "./mocks/films.js";

ReactDOM.render(
    <App
      title = {`The Grand Budapest Hotel`}
      genre = {`Drama`}
      releaseYear = {`2014`}
      films = {films}
    />,
    document.querySelector(`#root`)
);
