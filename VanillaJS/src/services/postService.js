const POSTS_API_URL = 'http://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json';

/**
 * Fetches posts from the API.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of post objects.
 */
const getPosts = async () => {
    try {
        // Make a GET request to the API URL
        const response = await fetch(POSTS_API_URL);
        const data = await response.json();

        // Return the data from the response
        return data;
    } catch (error) {
        // Log the error to the console
        console.error(error);
    }
}