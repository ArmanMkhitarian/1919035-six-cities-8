import React, {FormEvent, useEffect} from 'react';
import {CommentPost} from '../../types/Offers';
import {postCommentAction} from '../../store/api-actions';
import {getCurrentOffer} from '../../store/offer-data/selectors';
import {useDispatch, useSelector} from 'react-redux';
import {postDataStatus, postReview} from '../../store/offers-data/selectors';
import {DataStatus} from '../../const';
import {postDataStatusAction} from '../../store/action';


function FormSendComment(): JSX.Element {
  const dispatch = useDispatch();
  let isCommentSending = false;
  const currentOffer = useSelector(getCurrentOffer);
  const postReviewState = useSelector(postReview);
  const dataStatus = useSelector(postDataStatus);
  const onSetComment = (newComment: CommentPost) => {
    dispatch(postCommentAction(newComment));
    isCommentSending = true;
  };
  const [commentText,setCommentText] = React.useState('');
  const [ratingValue,setRatingValue] = React.useState(0);

  const onSubmitHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (commentText !== null && ratingValue !== null) {
      onSetComment({offerId: currentOffer.id, comment: commentText, rating: ratingValue});
      if(postReviewState.offerId === currentOffer.id){
        isCommentSending = false;
      }
    }
  };

  useEffect(() => {
    if (dataStatus === DataStatus.IsSended) {
      setCommentText('');
      setRatingValue(0);
      dispatch(postDataStatusAction(DataStatus.Default));
    }
  }, [dataStatus]);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onSubmitHandle}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input onChange={() => setRatingValue(5)} className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" checked={ratingValue === 5}/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={() => setRatingValue(4)} className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" checked={ratingValue === 4}/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={() => setRatingValue(3)} className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" checked={ratingValue === 3}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={() => setRatingValue(2)} className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" checked={ratingValue === 2}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={() => setRatingValue(1)} className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" checked={ratingValue === 1}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea onChange={(e) => setCommentText(e.target.value)}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={commentText}
        disabled = {isCommentSending}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={commentText.length < 50 || ratingValue === 0 || isCommentSending}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default FormSendComment;

