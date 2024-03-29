import ReviewCard from '../review/review';
import {Reviews} from '../../types/Offers';
import React from 'react';
import {MAX_COMMENTS} from '../../const';

type Setting = {
  reviews: Reviews | undefined,
}

function ReviewList(props: Setting) : JSX.Element {
  const {reviews} = props;
  reviews?.sort((a,b)=> new Date(b.date).valueOf() - new Date(a.date).valueOf());

  if(reviews !== undefined) {
    return (
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
        <ul className="reviews__list">
          {
            reviews.slice(0,MAX_COMMENTS).map((review, id) => {
              const keyValue = `${id}-${review.user.name}`;
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
