import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {getOffersMock} from '../../services/mocks';
import Map from './map';

describe('Component: Map', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const offers = getOffersMock();

    const {container} = render(
      <Router history={history}>
        <Map
          city={offers[0].city}
          className='property__map'
          offers={offers}
          selectedPointId={''}
        />
      </Router>,
    );

    expect(container.querySelectorAll('.leaflet-marker-icon').length).toBe(offers.length);
    expect(container.querySelector('[src="/img/pin-active.svg"]')).toBeInTheDocument();
  });
});
