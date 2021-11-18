import {Offer} from '../../types/Offers';
import {useHistory} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user-data/selectors';
import browserHistory from '../../browser-history';
import {sendFavoriteOffer} from '../../store/api-actions';

type Settings = {
  offer: Offer;
  onActive: (id: string | null) => void;
}

function Card(props: Settings): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const {offer, onActive} = props;
  const handleClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      browserHistory.push(AppRoute.Login);
    }
    else {
      dispatch(sendFavoriteOffer(offer.id, offer.isFavorite));
    }
  };

  return (
    <article className="cities__place-card place-card"
      onMouseOver={() => (onActive) ? onActive(offer.id) : undefined}
      onMouseLeave={() =>(onActive) ? onActive(null) : undefined}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <img
          onClick={() => history.push(AppRoute.Offer.replace('id',offer.id.toString())) }
          className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"
        />
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''}`} type='button' onClick={handleClick}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__stars rating__stars">
          <span style={{width: `${offer.rating*20}%`}}/>
          <span className="visually-hidden">Rating</span>
        </div>
        <h2 className="place-card__name">
          <a href={AppRoute.Offer.replace('id',offer.id.toString())}>{offer.title} {offer.isFavorite}</a>
        </h2>
        <p className="place-card__type">{offer.cardType}</p>
      </div>
    </article>
  );
}

export default Card;
