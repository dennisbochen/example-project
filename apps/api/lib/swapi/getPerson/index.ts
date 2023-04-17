const SWAPI_BASE_URL = 'https://swapi.dev/api';

export const getPerson = async (id: number) => {
  const data = await fetch(`${SWAPI_BASE_URL}/people/${id}/`).then((res) =>
    res.json()
  );
  return data;
};
