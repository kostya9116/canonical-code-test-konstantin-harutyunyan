import axios from 'axios';
import { getPosts, POSTS_API_URL } from './postService';

// Mock axios.get to return a resolved Promise with sample data
jest.mock('axios');
const mockedAxiosGet = axios.get as jest.Mock;

describe('getPosts', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should fetch posts successfully', async () => {
        // Arrange
        const mockResponse = { data: [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }] };
        mockedAxiosGet.mockResolvedValue(mockResponse);

        // Act
        const result = await getPosts();

        // Assert
        expect(result).toEqual(mockResponse.data);
        expect(mockedAxiosGet).toHaveBeenCalledWith(POSTS_API_URL);
    });

    it('should handle error during post fetching', async () => {
        // Arrange
        const error = 'Network error';
        mockedAxiosGet.mockRejectedValue(new Error(error));

        // Act and Assert
        await expect(getPosts()).rejects.toThrow(error);
    });
});
