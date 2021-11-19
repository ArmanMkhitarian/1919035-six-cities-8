import {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map';
import {City} from '../../types/types';
import leaflet, {Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Offers} from '../../types/Offers';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';


type Setting = {
  className: string
  city: City | undefined
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
    let markers: Marker[] = [];
    if (map) {
      markers = offers.map((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedPointId !== undefined && offer.id === selectedPointId
              ? currentCustomIcon
              : defaultCustomIcon,
          );
        marker.addTo(map);
        return marker;
      });
    }
    return () => markers.forEach((marker) => marker.remove());
  }, [map, offers, selectedPointId]);

  useEffect(() => {
    if (map && city !== undefined) {
      map.flyTo([city.location.latitude, city.location.longitude], city?.location.zoom);
    }
  }, [city,map]);

  return (
    <div className={className}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
