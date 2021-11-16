import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import MainEmpty from './main-empty';
import {cities} from '../../const';

const history = createMemoryHistory();

describe('main-empty', () => {
  it('should render "main-empty"', () => {
    render(
      <Router history={history}>
        <MainEmpty cities={cities} />
      </Router>,
    );
    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
  });
});
