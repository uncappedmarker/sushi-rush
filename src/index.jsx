import React from 'react';
import ReactDOM from 'react-dom';
import MainTemplate from "main-template"

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <MainTemplate />,
  document.getElementById('app')
);

module.hot.accept();