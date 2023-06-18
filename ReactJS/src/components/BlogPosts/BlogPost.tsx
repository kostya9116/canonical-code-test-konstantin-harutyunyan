/**
 * @file This module represents a blog post card component. It takes a BlogPost type object and renders it.
 */

import React, {useMemo} from 'react';
import {Col} from '@canonical/react-components';
import {BlogPost} from '../../types/BlogPost';
import {convertDateFormat} from '../../utils/date';

/**
 * This is a BlogPostCard functional component which takes in a BlogPost object and renders it.
 *
 * @param props - The props object.
 * @param props.post - The BlogPost object to render.
 *
 * @returns Returns the rendered BlogPost card or null if post is not provided.
 */
const BlogPostCard: React.FC<{ post: BlogPost }> = ({post}) => {
  // useMemo for optimization of author extraction and date conversion
  const {title, date = '', author, featuredMedia} = useMemo(() => {
    if (!post) {
      return {}
    }

    const author = post._embedded?.author?.[0] ?? null;

    // Extracting title, date, featuredMedia, and author from post and convert date format
    return {
      title: post.title.rendered,
      date: convertDateFormat(post.date) || '-',
      featuredMedia: post.featured_media,
      author
    }

  }, [post]);

  if (!post) {
    // Return null if post is not provided
    return null
  }

  // Render the post card
  return (
    <Col size={4} medium={3} className="blog-post-card">
      <header className="u-no-padding--top">
        <h3 className="p-muted-heading">
          Cloud and server
        </h3>
      </header>
      <div className="blog-post-card__content">
        <div className="blog-post-card__inner-content">
          <a href={post.link} target="_blank" rel="noreferrer">
            <img className="p-card__image" src={featuredMedia} loading="lazy" alt={title}/>
          </a>
          <h3 className="p-heading--4">
            <a href={post.link} target="_blank" rel="noreferrer">{title}</a>
          </h3>
          <em>By <a href={author?.link} target="_blank" rel="noreferrer">{author?.name}</a> on {date}</em>
        </div>
        <p className="p-card__inner blog-post-card__footer">Article</p>
      </div>
    </Col>
  );
};

export default BlogPostCard;
