import React from 'react';
import { Link, generatePath } from 'react-router-dom';

import { STATION_PATH } from '../config';

const StationRow = ({ station }) => {
  return (
    <div className="mb-2 font-12">
      <div className="py-1 row">
        <div className="col-md-2">
          <img className="w-100" src={station.imgUrl} alt={station.name} />
        </div>
        <div className="col-md-10">
          <div className="font-22 mb-2">
            <b>{station?.name}</b>
          </div>
          {station?.description}
          <br />
          Reliability: <b>{station?.reliability}</b>
          <br />
          Popularity: <b>{station?.popularity}</b>
          <br />
          <Link
            to={generatePath(STATION_PATH, { id: station.id })}
            className="d-block font-22 text-success"
          >
            Play >>
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default StationRow;
