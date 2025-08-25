import React from 'react';
import PropTypes from 'prop-types';

type MapProps = {
  latitude: number;
  longitude: number;
  zoom?: number;
};

const Map: React.FC<MapProps> = ({ latitude, longitude, zoom = 10 }) => {
  return (
    <div className="h-64 w-full">
      {/* production-ready for map integration, e.g., Google Maps API */}
      <div role="img" aria-label={`Map showing location at latitude ${latitude} and longitude ${longitude}`}>Map Component</div>
    </div>
  );
};

Map.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number,
};

export default Map;