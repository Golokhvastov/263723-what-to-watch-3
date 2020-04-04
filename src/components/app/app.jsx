import React from "react";
import Main from "../main/main.jsx";

const movieTitleClickHandler = () => {};

const App = (props) => {

  return (
    <Main
      onMovieTitleClick = {movieTitleClickHandler}
      {...props}
    />
  );
};


export default App;
