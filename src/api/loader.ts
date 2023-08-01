import axios from 'axios';

interface IIpStackResponse {
  latitude: number;
  longitude: number;
  city: string;
  country_name: string;
  ip: string;
}

const ipstackAPI = axios.create({
  baseURL: 'http://api.ipstack.com/',
});

const defaultFields = ['country_name', 'ip', 'latitude', 'longitude', 'city'];

const getLocation = async (
  requestData = 'check',
  fields = defaultFields
): Promise<IIpStackResponse> =>
  ipstackAPI
    .get(
      `/${requestData}?fields=${fields.join(',')}&access_key=${
        process.env.REACT_APP_API_KEY
      }`
    )
    .then((response) => response.data)
    .catch((error) => error);

export { getLocation };
export type { IIpStackResponse };
