import FavoritesCard from './favorites-card';
import Header from '../header/header';
import {useDispatch, useSelector} from 'react-redux';
import {getFavorites} from '../../store/offers-data/selectors';
import {getFavoriteOffers} from '../../store/api-actions';
import {useEffect} from 'react';
import {cities} from '../../const';
import FavoritesEmpty from './favorites-empty';


function Favorites(): JSX.Element {
  const dispatch = useDispatch();
  const offers = useSelector(getFavorites);

  const onLoading = () => {
    dispatch(getFavoriteOffers());
  };

  useEffect(() => {
    onLoading();
  }, []);

  const groups = cities.map((city) => (
    {
      city,
      offers: offers.filter((offer) => offer.city.name === city),
    }
  ));
  const groupsOffers = groups.filter((group) => group.offers.length > 0);

  if(groupsOffers.length > 0){
    return (
      <section>
        <div className="page">
          <Header/>
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {groupsOffers.map((group) => (
                    <li key = {group.city} className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{group.city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {
                          group.offers.map((offer, id) => {
                            const keyValue = `${id}-${offer.title}`;
                            return(
                              <article className="favorites__card place-card" key={keyValue}>
                                <FavoritesCard offer = {offer}/>
                              </article>
                            );
                          })
                        }
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </main>
          <footer className="footer container">
            <a className="footer__logo-link" href="main.html">
              <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
            </a>
          </footer>
        </div>
      </section>
    );
  }
  else {
    return <FavoritesEmpty/>;
  }


}

export default Favorites;
