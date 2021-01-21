import React, { useCallback, useContext } from 'react';
import { cloneDeep } from 'lodash';

import { ApiDataContext } from '../providers/ApiDataProvider';

const Sorters = ({ setStations }) => {
  const stations = useContext(ApiDataContext);

  const reliabilitySort = useCallback(
    (type) => {
      const newStations = cloneDeep(
        stations
      ).sort(({ reliability: a }, { reliability: b }) =>
        type === 'asc' ? b - a : a - b
      );
      setStations(newStations);
    },
    [stations, setStations]
  );

  const popularitySort = useCallback(
    (type) => {
      const newStations = cloneDeep(
        stations
      ).sort(({ popularity: a }, { popularity: b }) =>
        type === 'asc' ? b - a : a - b
      );
      setStations(newStations);
    },
    [stations, setStations]
  );

  const reset = useCallback(() => {
    setStations(cloneDeep(stations));
  }, [stations, setStations]);

  return (
    <div className="filter">
      <div className="mb-3">
        <div className="mb-3">Sort by reliability</div>
        <button
          className="d-inline-block btn btn-success mx-3"
          type="button"
          onClick={() => reliabilitySort('asc')}
        >
          Asc
        </button>
        <button
          className="d-inline-block btn btn-success mx-3"
          type="button"
          onClick={() => reliabilitySort('desc')}
        >
          Desc
        </button>
        <hr />
      </div>

      <div className="mb-3">
        <div className="mb-3">Sort by popularity</div>
        <button
          className="d-inline-block btn btn-success mx-3"
          type="button"
          onClick={() => popularitySort('asc')}
        >
          Asc
        </button>
        <button
          className="d-inline-block btn btn-success mx-3"
          type="button"
          onClick={() => popularitySort('desc')}
        >
          Desc
        </button>
        <hr />
      </div>

      <div className="mb-3">
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => reset()}
        >
          Reset
        </button>
        <hr />
      </div>
    </div>
  );
};
export default Sorters;
