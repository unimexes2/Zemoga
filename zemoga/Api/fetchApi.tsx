import axios from 'axios';

export default async function fetchApi() {
  const baseUrl = 'https://jsonplaceholder.typicode.com/';
  const query = baseUrl + `posts`;
  var result: any[] = [];
  try {
    const response = await axios.get(query);

    if (response.status !== 200) {
      console.error('[!] Error:', response.status, 'returned');
      throw new Error(`Request failed with status ${response.status}`);
    }

    result = response.data;
  } catch (error) {
    console.error('[!] Error:', error);
    throw new Error('An error occurred during API call');
  }
  return result;
}
