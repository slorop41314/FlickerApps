import axios from 'axios';
import { fetchFeedData } from '../src/service/NetworkService/HomeNetworkService';

jest.mock('axios');

describe('Fetch Feed Data', () => {
  it('fetches successfully data from Flickr API', async () => {
    const data = {
      "title": "Uploads from everyone",
      "link": "https:\/\/www.flickr.com\/photos\/",
      "description": "",
      "modified": "2020-06-02T16:14:47Z",
      "generator": "https:\/\/www.flickr.com",
      "items": []
    }

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchFeedData("", 1)).resolves.toEqual(data);
  });

});