import Main from '../main/main';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../login/login';
import Offer from '../property/offer';
import NotFound404 from '../not-found-404/not-found-404';
import FavoritesEmpty from '../favorites/favorites-empty';
import {AppRoute, AuthorizationStatus} from '../../const';
import Favorites from '../favorites/favorites';
import PrivateRoute from '../private-route/private-route';
import {Offers} from '../../types/Offers';
import React from 'react';

type MainSettings = {
  countOffer: number;
  offers: Offers;
}

function App({countOffer, offers}: MainSettings): JSX.Element {
  return (
    <section>
      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoute.Main}>
            <Main countOffer = {countOffer} offers = {offers} />
          </Route>
          <Route exact path={AppRoute.Root}>
            <Main countOffer = {countOffer} offers = {offers}/>
          </Route>
          <Route exact path={AppRoute.Login}>
            <Login/>
          </Route>
          <PrivateRoute
            exact
            path={AppRoute.Favorites}
            render={() => <Favorites offers = {offers}/>}
            authorizationStatus = {AuthorizationStatus.Auth}
          >
          </PrivateRoute>
          <Route exact path={AppRoute.FavoritesEmpty}>
            <FavoritesEmpty/>
          </Route>
          <Route exact path={AppRoute.Offer}>
            <Offer offers = {offers}/>
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
