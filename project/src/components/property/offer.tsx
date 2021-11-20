import {useParams} from 'react-router';
import FormSendComment from '../form-send-comment/form-send-comment';
import React from 'react';
import {
  fetchCommentsAction,
  fetchNearByOffersAction,
  fetchOfferAction,
  sendFavoriteOffer
} from '../../store/api-actions';
import ImagesList from '../images-list/images-list';
import Loading from '../loading/loading';
import {useEffect } from 'react';
import ReviewList from '../review-list/review-list';
import Map from '../map/map';
import {AppRoute, AuthorizationStatus} from '../../const';
import Header from '../header/header';
import {getCurrentOffer, getNearbyOffers, getReviews} from '../../store/offer-data/selectors';
import {getAuthorizationStatus} from '../../store/user-data/selectors';
import {useSelector, useDispatch} from 'react-redux';
import browserHistory from '../../browser-history';
import CardList from '../card-list/card-list';

type ParamsType = {
  id: string;
}

function Offer(): JSX.Element {
  const dispatch = useDispatch();
  const params: ParamsType = useParams();
  const currentOffer = useSelector(getCurrentOffer);
  const reviews = useSelector(getReviews);
  const nearbyOffers = useSelector(getNearbyOffers);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const onLoading = (id: string) => {
    dispatch(fetchOfferAction(id));
    dispatch(fetchNearByOffersAction(id));
    dispatch(fetchCommentsAction(id));
  };

  useEffect(() => {
    onLoading(params.id);
  }, []);
  if (!currentOffer.id) {
    return (<Loading/>);
  }

  const mapPoints = [...nearbyOffers ?? []];
  mapPoints.push(currentOffer);
  currentOffer.rating = Math.round(currentOffer.rating);
  const favoriteButtonStyle = currentOffer.isFavorite ? 'property__bookmark-button--active' : '';
  const handleClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      browserHistory.push(AppRoute.Login);
    }
    else {
      dispatch(sendFavoriteOffer(currentOffer.id, currentOffer.isFavorite));
    }
  };
  return (
    <div>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"/>
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"/>
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"/>
          </symbol>
        </svg>
      </div>

      <div className="page">
        <Header/>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                <ImagesList images={currentOffer.images}/>
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {currentOffer.isPremium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                )}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {currentOffer?.title}
                  </h1>
                  <button className={`property__bookmark-button ${favoriteButtonStyle} button`} type="button" onClick={handleClick}>
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${currentOffer.rating*20}%`}}/>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{currentOffer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {currentOffer.cardType}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {currentOffer.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {currentOffer.maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro; {currentOffer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {currentOffer.goods.map((good) => (
                      <li key={`${currentOffer.id}-${good}`} className="property__inside-item">
                        {good}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={currentOffer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {currentOffer.host.name}
                    </span>
                    {currentOffer.host.isPro ? (
                      <span className="property__user-status">Pro</span>
                    ) : ('')}
                  </div>
                  <div className="property__description">
                    {currentOffer.description}
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ReviewList reviews={reviews}/>
                  {
                    authorizationStatus === AuthorizationStatus.Auth &&
                    <FormSendComment/>
                  }
                </section>
              </div>
            </div>
            <Map className="property__map map" city={currentOffer.city} offers={mapPoints} selectedPointId = {currentOffer.id}/>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <CardList offers={nearbyOffers.slice(0,3)} onListItemHover={() => null}/>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
export default Offer;

