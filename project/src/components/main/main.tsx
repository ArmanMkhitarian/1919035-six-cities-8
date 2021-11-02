import {Offers} from '../../types/Offers';
import CardList from '../card-list/card-list';
import Map from '../map/map';
import React from 'react';
import CityList from '../city-list/city-list';
import Sort from '../sort/sort';
import {AppRoute, AuthorizationStatus} from '../../const';
import { Link } from 'react-router-dom';
import {ThunkAppDispatch} from '../../store/action';
import {connect, ConnectedProps} from 'react-redux';
import {logoutAction} from '../../store/api-actions';


type MainSettings = {
  offers: Offers,
  cities: string[],
  currentCity: string,
  currentLogin: string | null,
  authorizationStatus: AuthorizationStatus,
}

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLogout() {
    dispatch(logoutAction());
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector> & MainSettings;

function Main({offers, cities, currentCity, currentLogin, authorizationStatus, onLogout}: PropsFromRedux): JSX.Element {
  const [selectedPointId, setSelectedPoint] = React.useState<string | null>(null);
  const onListItemHover = (listItemName: string | null) => {
    const currentPoint = offers.find((offer) =>
      offer.id === listItemName,
    );
    if(currentPoint !== undefined){
      setSelectedPoint(currentPoint.id);
    }
  };
  return (
    <section>
      <div style = {{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path>
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path
              d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"
            >
            </path>
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
            >
            </path>
          </symbol>
        </svg>
      </div>

      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  {authorizationStatus === AuthorizationStatus.Auth ?
                    <>
                      <li className="header__nav-item user">
                        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                          <div className="header__avatar-wrapper user__avatar-wrapper">
                          </div>
                          <span className="header__user-name user__name">{currentLogin}</span>
                        </Link>
                      </li>
                      <li className="header__nav-item">
                        <Link className="header__nav-link" to={AppRoute.Login}>
                          <span className="header__signout" onClick ={onLogout}>Sign out</span>
                        </Link>
                      </li>
                    </>
                    :
                    <li className="header__nav-item user">
                      <Link className="header__nav-link" to={AppRoute.Login}>
                        <span className="header__signout">Sign in</span>
                      </Link>
                    </li>}
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--index">
          <CityList cities={cities}/>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {currentCity}</b>
                <Sort/>
                <div>
                  <CardList offers = {offers} onListItemHover={onListItemHover}/>
                </div>
              </section>
              <div className="cities__right-section">
                <Map className="cities__map map" city={offers[0].city} offers={offers} selectedPointId = {selectedPointId}/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}


export { Main };
export default connector(Main);
