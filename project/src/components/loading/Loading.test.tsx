import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Loading from './loading';

const history = createMemoryHistory();

describe('Loading', () => {
  it('should render "Loading"', () => {
    render(
      <Router history={history}>
        <Loading />
      </Router>,
    );
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});
