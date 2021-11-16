import {render, screen} from '@testing-library/react';
import {getReviewsMock} from '../../services/mocks';
import ReviewList from './review-list';

const mockReviews = getReviewsMock();

describe('Component: ReviewList', () => {
  it('should render correctly', () => {
    render(<ReviewList reviews={mockReviews} />);

    for (const mockReview of mockReviews) {
      expect(screen.getByText(new RegExp(mockReview.comment, 'i'))).toBeInTheDocument();
    }
  });
});
