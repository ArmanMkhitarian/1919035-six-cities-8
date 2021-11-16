import {getReviewMock} from '../../services/mocks';
import {render, screen} from '@testing-library/react';

import ReviewCard from './review';

const mockReview = getReviewMock();

describe('Component: Review', () => {
  it('should render correctly', () =>{
    render(
      <ReviewCard review={mockReview}/>);
    expect(screen.getByText(new RegExp(mockReview.comment, 'i'))).toBeInTheDocument();
  });
});
