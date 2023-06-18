import axios from 'axios';
import {BlogPost} from "../types/BlogPost";

// API URL for fetching posts
export const POSTS_API_URL = 'http://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json';

/**
 * Fetches posts from the API.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of post objects.
 */
export const getPosts = async (): Promise<BlogPost[]> => {
  try {
    // Make a GET request to the API URL
    const response = await axios.get(POSTS_API_URL);

    // Return the data from the response
    return response.data;
  } catch (error) {
    // Throw the received error
    throw error;
  }
}
