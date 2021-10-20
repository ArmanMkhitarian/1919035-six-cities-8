import ReviewCard from '../review/review';
import {Reviews} from '../../types/Offers';
import React from 'react';

type Setting = {
  reviews: Reviews | undefined,
  reviewsCount: number | undefined
}

function ReviewList(props: Setting) : JSX.Element {
  const {reviews, reviewsCount} = props;
  if(reviews !== undefined && reviewsCount !== undefined) {
    return (
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
        <ul className="reviews__list">
          {
            reviews.map((review, id) => {
              const keyValue = `${id}-${review.name}`;
              return (
                <div key={keyValue}>
                  <ReviewCard review={review}/>
                </div>
              );
            })
          }
        </ul>
      </section>
    );
  }
  else {
    return (
      <div>
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">0</span></h2>
      </div>
    );
  }
}

export default ReviewList;
