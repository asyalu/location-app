import { getLocation, IIpStackResponse } from '../api/loader';

const fetchLocationData = async (
  searchValue?: string
): Promise<IIpStackResponse> => {
  try {
    const response = await getLocation(searchValue);
    return response;
  } catch (error) {
    throw new Error('Error fetching location data');
  }
};

export { fetchLocationData };
