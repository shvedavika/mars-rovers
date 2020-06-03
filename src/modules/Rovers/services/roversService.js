import { normalizeQuery } from "../../RoverPhotosForm/helpers/RoverPhotosFormHeper";

const API_KEY = 'DEMO_KEY';
const API_BASE = 'https://api.nasa.gov/mars-photos/api/v1/';
export const PER_PAGE_ITEMS = 25;

export function retrieveRoverInformation(rover) {
  return fetchBasic(`manifests/${rover}`)
    .then(data => data.photo_manifest || []);
}

export function retrievePhotosByParameters(parameters) {
  const { name, ...rest } = parameters;
  const nameLowerCased = name.toLowerCase();
  const query = normalizeQuery(rest);
  return fetchBasic(`rovers/${nameLowerCased}/photos`, query)
    .then(data => data.photos || []);
}

export function fetchBasic(url, query = {}, config = {}) {
  const queryString = new URLSearchParams({
    api_key: API_KEY,
    ...query,
  });
  const configHeaders = config.headers || {};
  const requestInit = {
    ...config,
    method: 'GET',
    headers: {
      ...configHeaders,
      'Content-Type': 'application/json',
    },
  };
  const endpoint = `${API_BASE}${url}?${queryString}`;
  return fetch(endpoint, requestInit)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(new Error(`Error: ${response.statusText}`));
      }
      return response.json();
    });
}
