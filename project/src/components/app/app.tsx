import Main from '../main/main';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../login/login';
import Offer from '../property/offer';
import NotFound404 from '../not-found-404/not-found-404';
import FavoritesEmpty from '../favorites/favorites-empty';
import {AppRoute, AuthorizationStatus} from '../../const';
import Favorites from '../favorites/favorites';
import PrivateRoute from '../private-route/private-route';
import React from 'react';
import {cities} from '../../const';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({ currentCity, offers }: State) => ({
  currentCity,
  offers,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function App(props: ConnectedComponentProps): JSX.Element {
  const {offers, currentCity} = props;
  const offersFilter = offers.filter((offer) => offer.city.name === currentCity);
  return (
    <section>
      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoute.Main}>
            <Main currentCity = {currentCity} cities={cities} countOffer = {offersFilter.length} offers = {offersFilter} />
          </Route>
          <Route exact path={AppRoute.Root}>
            <Main currentCity = {currentCity} cities={cities} countOffer = {offersFilter.length} offers = {offersFilter}/>
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

export { App };
export default connector(App);
