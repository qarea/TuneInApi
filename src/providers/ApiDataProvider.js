import React, { createContext, useContext, useMemo } from 'react';
import useAxios from 'axios-hooks';

import { API_URL } from '../config';

export const ApiDataContext = createContext([]);

export const AccountProvider = ({ children }) => {
  const [{ data, loading, error }] = useAxios(API_URL);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  const output = !loading ? children : null;
  return (
    <ApiDataContext.Provider value={data.data}>
      {output}
    </ApiDataContext.Provider>
  );
};
export const useCurrentStation = (id) => {
  const stations = useContext(ApiDataContext);
  return useMemo(() => {
    return id && stations ? stations.find((s) => s.id === id) : null;
  }, [id, stations]);
};
