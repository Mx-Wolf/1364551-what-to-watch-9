import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/film';
import {Provider} from 'react-redux';
import { store } from './store';
import { Film, FilmCards } from './types/film';

const startSettings = {
  title : 'The Grand Budapest Hotel',
  genre : 'Drama',
  realizeYear: 2014,

};


const chooseGenre =(value:string, array:FilmCards) => {


  const checkGenre =(element:Film) => {

    const {genre} = element;


    if(value === genre){

      return element;
    }
  };

  if(value === 'All generes'){

    return array;
  }
  else{
    array.filter(checkGenre);
    const filteredArray = array.filter(checkGenre);
    return filteredArray;
  }
};


chooseGenre('All generes',films);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App title={startSettings.title}
        genre = {startSettings.genre} relizeYear={startSettings.realizeYear}
        films={films}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
