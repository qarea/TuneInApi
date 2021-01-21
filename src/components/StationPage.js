import React from 'react';

import { useCurrentStation } from '../providers/ApiDataProvider';

const StationPage = ({ match }) => {
  const id = match?.params?.id;
  const station = useCurrentStation(id);
  if (!station) return null;
  return (
    <div className="container">
      <div className="text-center mt-2 mb-5">
        <h1>Your Favourite Stations</h1>
        <hr />
        <div className="row pt-4">
          <div className="col-md-3">
            <img className="w-100" src={station.imgUrl} alt={station.name} />
          </div>
          <div className="col-md-9 text-md-left" style={{ textAlign: 'left' }}>
            <h2>{station?.name}</h2>
            <br />
            {station?.description}
            <div className="mt-4">
              <audio controls preload="auto" autoPlay={true}>
                <track kind="captions" />
                <source src={station?.streamUrl} />
              </audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StationPage;
