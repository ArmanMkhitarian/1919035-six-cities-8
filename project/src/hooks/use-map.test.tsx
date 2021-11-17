import { renderHook } from '@testing-library/react-hooks';
import useMap from './use-map';

describe('Hook: useMap', () => {
  it('should return null if refElement = null', () => {
    const city = {location: {latitude: 1.2, longitude: 2.2, zoom: 2}, name: 'Amsterdam'}
    const ref = {
      current: null as any,
    };

    const { result } = renderHook(() => useMap(ref, city));

    expect(result.current).toBe(null);
  });
});
