'use strict';

// This function will throw error if something goes wrong, calling function should catch the error
export const getJSON = async url => {
  const res = await fetch(url);

  if (!res.ok) throw new Error(`Problem with fetch request: ${res.status}`);

  const data = await res.json();
  return data;
};
