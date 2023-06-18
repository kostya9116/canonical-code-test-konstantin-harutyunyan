// renderBlogPosts function fetches posts and instantiates a new BlogPosts object
const renderBlogPosts = async () => {
  try {
    // Fetch posts
    const posts = await getPosts()
    // Instantiate new BlogPosts object and pass in the posts and container element ID
    const blogPosts = new BlogPosts('root', posts)
    // Return the BlogPosts object for potential future use
    return blogPosts;
  } catch (error) {
    // Log any errors that occur during the fetch
    console.error("Error getting posts:", error);
  }
}

// Call the renderBlogPosts function
renderBlogPosts()
