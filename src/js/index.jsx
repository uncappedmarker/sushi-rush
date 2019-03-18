import React from "react";
import ReactDOM from "react-dom";
import MainTemplate from "main"

const title = "Sushi Rush!";

ReactDOM.render(
  <MainTemplate />,
  document.getElementById("app")
);

module.hot.accept();