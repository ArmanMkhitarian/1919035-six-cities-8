import {Offer} from '../../types/Offers';
import {AppRoute} from '../../const';
import {useHistory} from 'react-router-dom';
import {sendFavoriteOffer} from '../../store/api-actions';
import {useDispatch} from 'react-redux';

type Settings = {
  offer: Offer;
}

function FavoritesCard(props: Settings): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();
  const {offer} = props;
  const handleClick = () => {
    dispatch(sendFavoriteOffer(offer.id, offer.isFavorite));
  };

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <img onClick={() => history.push(AppRoute.Offer.replace(':id',offer.id.toString()))} className="place-card__image" src= {offer.previewImage} width="150" height="110" alt="Place image"/>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className='place-card__bookmark-button button place-card__bookmark-button--active' type='button' onClick={handleClick}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '100%'}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.cardType}</p>
      </div>
    </article>

  );
}

export default FavoritesCard;
