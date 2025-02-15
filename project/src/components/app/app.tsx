import MainScreen from '../main-screen/main-screen';
import SignIn from '../sign-in-screnn/sign-in-screen';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MyList from '../my-list-screen/my-list-screen';
import {AppRoute, AuthorizationStatus} from '../../consts';
import MovieDetails from '../movie-page-details-screen/movie-page-details-screen';
import AddReview from '../add-review/add-review';

import NotFound from '../404-screen/404-screen';
import PrivateRoute from '../private-route/private-route';
import { FilmCards} from '../../types/film';
import Player from '../player-screen/player-screen';
type AppScreenProps = {
  title: string,
  relizeYear: number,
  genre: string,
  films: FilmCards,

}
function App({title, relizeYear, genre,films}: AppScreenProps): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen films={films} title = {title} genre = {genre} relizeYear = {relizeYear} />}
        />
        <Route
          path = {AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path = {AppRoute.MyList}

          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList films ={films} />
            </PrivateRoute>
          }

        />
        <Route
          path={AppRoute.Player(':id')}
          element={<Player />}
        />
        <Route
          path = {AppRoute.Film(':id')}
          element = {<MovieDetails  />}
        />
        <Route
          path = {AppRoute.AddReview(':id') }
          element = {<AddReview />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
