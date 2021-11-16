import { render, screen } from '@testing-library/react';
import Header from './header';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';

const store = configureMockStore();

describe('Header page', () => {
  it('should render Header', () => {
    render(
      <Provider store={store({})}>
        <Header/>
      </Provider>);
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
