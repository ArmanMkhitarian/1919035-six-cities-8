import Main from '../main/main';
import {Route, Switch} from 'react-router-dom';
import Login from '../login/login';
import Offer from '../property/offer';
import NotFound404 from '../not-found-404/not-found-404';
import FavoritesEmpty from '../favorites/favorites-empty';
import {AppRoute, SortType} from '../../const';
import Favorites from '../favorites/favorites';
import PrivateRoute from '../private-route/private-route';
import React from 'react';
import {cities} from '../../const';
import {Offers} from '../../types/Offers';
import Loading from '../loading/loading';
import {
  getCurrentCity,
  getCurrentSortType,
  getDataLoaded,
  getOffersInSelectedCity
} from '../../store/offers-data/selectors';
import {useSelector} from 'react-redux';


const getOffersSorted = (currentSortType: string, offers: Offers) => {
  switch(currentSortType){
    case SortType.PriceIncrease: {
      return offers.slice().sort((x, y) => x.price - y.price);
    }
    case SortType.PriceDecrease: {
      return offers.slice().sort((x, y) => y.price - x.price);
    }
    case SortType.TopRatedFirst: {
      return offers.slice().sort((x, y) => y.rating - x.rating);
    }
    default: {
      return offers;
    }
  }
};


function App(): JSX.Element {
  const currentCity = useSelector(getCurrentCity);
  const currentSortType = useSelector(getCurrentSortType);
  const isDataLoaded = useSelector(getDataLoaded);
  const offersFilter = useSelector(getOffersInSelectedCity(currentCity));
  const offersSorted = getOffersSorted(currentSortType, offersFilter);
  if (!isDataLoaded) {
    return (
      <Loading/>
    );
  }
  return (
    <Switch>
      <Route exact path={AppRoute.Main}>
        <Main currentCity = {currentCity} cities={cities} offers = {offersSorted} />
      </Route>
      <Route exact path={AppRoute.Root}>
        <Main currentCity = {currentCity} cities={cities} offers = {offersSorted} />
      </Route>
      <Route exact path={AppRoute.Login}>
        <Login/>
      </Route>
      <PrivateRoute
        exact
        path={AppRoute.Favorites}
        render={() => <Favorites/>}
      >
      </PrivateRoute>
      <Route exact path={AppRoute.FavoritesEmpty}>
        <FavoritesEmpty/>
      </Route>
      <Route exact path={AppRoute.Offer}>
        <Offer/>
      </Route>
      <Route>
        <NotFound404/>
      </Route>
    </Switch>
  );
}

export default App;
