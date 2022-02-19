import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';


const startSettings = {
  title : 'The Grand Budapest Hotel',
  genre : 'Drama',
  realizeYear: 2014,

};
ReactDOM.render(
  <React.StrictMode>
    <App title={startSettings.title} genre = {startSettings.genre} relizeYear={startSettings.realizeYear}/>
  </React.StrictMode>,
  document.getElementById('root'));