/**
 * @file This module represents a blog posts component. It fetches data from post service and handles UI for different states like loading, error and posts data.
 */

import React, {useEffect, useState} from 'react';
import {Row, Notification} from '@canonical/react-components';
import {getPosts} from '../../services/postService';
import BlogPostCard from './BlogPost';
import {BlogPost} from '../../types/BlogPost';
import Error from '../Error';
import Loader from '../Loader';

/**
 * The BlogPosts functional component fetches posts data and handles loading, error and post data UI.
 * @returns Returns a Spinner while loading, Notification in case of an error and list of BlogPostCard if posts are available.
 */
const BlogPosts = () => {
  // States for holding posts data, loading status and error message
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // This async function fetches posts data and handles error.
    const fetchPosts = async (): Promise<void> => {
      try {
        const fetchedPosts: BlogPost[] = await getPosts(); // fetch posts data
        setPosts(fetchedPosts); // set fetched data to posts state
      } catch (error: any) {
        setError(error?.message || "Error fetching posts"); // set error state in case of an error
      } finally {
        setLoading(false); // stop the loading after fetching data or in case of an error
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    // Return spinner while loading
    return <Loader />
  }

  if (error) {
    // Return error notification in case of an error
    return <Error error={error} />
  }

  // Return list of posts if available else return notification
  return (
    <Row className="u-equal-height u-clearfix">
      {posts?.length > 0 ? (
        posts.map((post) => (
          <BlogPostCard post={post} key={post.id}/>
        ))
      ) : (
        <Notification
          severity="information"
          title="No posts found."
        />
      )}
    </Row>
  );
};

export default BlogPosts;
