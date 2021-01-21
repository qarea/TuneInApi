import React, { useCallback, useContext, useState } from 'react';
import Select from 'react-select';
import { cloneDeep } from 'lodash';

import { ApiDataContext } from '../providers/ApiDataProvider';

const Filters = ({ setStations }) => {
  const stations = useContext(ApiDataContext);
  const [selectedTagOption, setSelectedTagOption] = useState();
  const [selectedNameOption, setSelectedNameOption] = useState();

  const getTags = useCallback(() => {
    const tags = [];
    stations.forEach((station) =>
      station.tags.forEach((tag) => {
        if (!tags.includes(tag)) tags.push(tag);
      })
    );

    return tags.map((tag) => {
      return { label: tag, value: tag };
    });
  }, [stations]);

  const getNames = useCallback(() => {
    const names = [];
    stations.forEach((station) => {
      if (!names.includes(station.name)) names.push(station.name);
    });

    return names.map((name) => {
      return { label: name, value: name };
    });
  }, [stations]);

  const handleTagsChange = useCallback(
    (selectedOption) => {
      const tag = selectedOption?.value;
      const newStations = cloneDeep(stations).filter((station) => {
        return station.tags.includes(tag);
      });
      setStations(newStations);
      setSelectedTagOption(selectedOption);
      setSelectedNameOption(null);
    },
    [stations, setStations, setSelectedTagOption, setSelectedNameOption]
  );

  const handleNameChange = useCallback(
    (selectedOption) => {
      const name = selectedOption?.value;
      const newStations = cloneDeep(stations).filter((station) => {
        return station.name === name;
      });
      setStations(newStations);
      setSelectedNameOption(selectedOption);
      setSelectedTagOption(null);
    },
    [stations, setStations, setSelectedTagOption, setSelectedNameOption]
  );

  return (
    <div className="filter">
      <div className="mb-3">
        <div className="mb-3">Search By tags</div>
        <Select
          options={getTags()}
          value={selectedTagOption}
          onChange={handleTagsChange}
        />
        <hr />
      </div>
      <div className="mb-3">
        <div className="mb-3">Search By name</div>
        <Select
          options={getNames()}
          value={selectedNameOption}
          onChange={handleNameChange}
        />
        <hr />
      </div>
    </div>
  );
};
export default Filters;
