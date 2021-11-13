import {Offers} from '../../types/Offers';
import CardList from '../card-list/card-list';
import Map from '../map/map';
import React from 'react';
import CityList from '../city-list/city-list';
import Sort from '../sort/sort';
import Header from '../header/header';
import MainEmpty from '../main-empty/main-empty';

type MainSettings = {
  offers: Offers,
  cities: string[],
  currentCity: string,
}

function Main({offers, cities, currentCity}: MainSettings): JSX.Element {
  const [selectedPointId, setSelectedPoint] = React.useState<string | null>(null);
  const onListItemHover = (listItemName: string | null) => {
    const currentPoint = offers.find((offer) =>
      offer.id === listItemName,
    );
    if(currentPoint !== undefined){
      setSelectedPoint(currentPoint.id);
    }
  };
  if(offers.length === 0) {
    return <MainEmpty cities={cities}/>;
  }
  else {
    return (
      <section>
        <div className="page page--gray page--main">
          <Header/>
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
}

export default Main;
