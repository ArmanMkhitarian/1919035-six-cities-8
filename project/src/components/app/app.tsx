import Main from '../main/main';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../login/login';
import Property from '../property/property';
import NotFound404 from '../notFound404/notFound404';
import FavoritesEmpty from '../favorites/favorites-empty';
import {AppRoute, AuthorizationStatus} from '../../const';
import Favorites from '../favorites/favorites';
import PrivateRoute from '../privateRoute/privateRoute';


type MainSettings = {
  countOffer: number
}

function App(props: MainSettings): JSX.Element {
  return (
    <section>
      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoute.Main}>
            <Main countOffer = {props.countOffer}/>
          </Route>
          <Route exact path={AppRoute.Root}>
            <Main countOffer = {props.countOffer}/>
          </Route>
          <Route exact path={AppRoute.Login}>
            <Login/>
          </Route>
          <PrivateRoute
            exact
            path={AppRoute.Favorites}
            render={() => <Favorites/>}
            authorizationStatus = {AuthorizationStatus.NoAuth}
          >
          </PrivateRoute>
          <Route exact path={AppRoute.FavoritesEmpty}>
            <FavoritesEmpty/>
          </Route>
          <Route exact path={AppRoute.Property}>
            <Property/>
          </Route>
          <Route
            render={() => (
              <NotFound404/>
            )}
          />
        </Switch>
      </BrowserRouter>
    </section>
  );
}

export default App;
