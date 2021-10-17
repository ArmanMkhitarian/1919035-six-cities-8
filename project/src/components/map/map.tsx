import {useEffect, useRef} from 'react';
import useMap from '../../hooks/useMap';
import {City} from '../../types/types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Offers} from '../../types/Offers';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';


type Setting = {
  className: string
  city: City
  offers: Offers
  selectedPointId: string | null
}

function Map({city, className, offers, selectedPointId }: Setting) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer.id === selectedPointId) ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, selectedPointId]);

  return (
    <div className={className}
      style={{height: '500px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
