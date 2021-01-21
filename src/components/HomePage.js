import React, { useContext, useState } from 'react';

import { ApiDataContext } from '../providers/ApiDataProvider';

import StationRow from './StationRow';
import Filters from './Filters';
import Sorters from './Sorters';

const HomePage = () => {
  const [stations, setStations] = useState(useContext(ApiDataContext));

  const stationsList = stations.map((station) => {
    return <StationRow key={'station-' + station.id} station={station} />;
  });

  return (
    <div className="container">
      <div className="text-center mt-2 mb-5">
        <h1>Your Favourite Stations</h1>
        <hr />
      </div>
      <div className="row">
        <div className="col-md-3">
          <Filters setStations={setStations} />
          <Sorters setStations={setStations} />
        </div>
        <div className="col-md-9">{stationsList}</div>
      </div>
    </div>
  );
};
export default HomePage;
