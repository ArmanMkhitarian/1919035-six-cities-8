import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import NotFound404 from './not-found-404';

const history = createMemoryHistory();

describe('Not found page', () => {
  it('should render "Not found"', () => {
    render(
      <Router history={history}>
        <NotFound404 />
      </Router>,
    );
    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
  });
});
