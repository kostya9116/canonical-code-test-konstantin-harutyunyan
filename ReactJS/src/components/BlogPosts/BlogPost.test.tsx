import React from 'react';
import {render, screen} from '@testing-library/react';
import BlogPostCard from './BlogPost';
import {createMockPosts} from '../../tests/mockedBlogPosts';
import {BlogPost} from "../../types/BlogPost";
import {convertDateFormat} from "../../utils/date";

describe('BlogPostCard component', () => {
  const mockPosts = createMockPosts(1); // Generate mock posts

  const renderBlogPost = (post: BlogPost) => render(<BlogPostCard post={post}/>);

  it('renders the post title', () => {
    renderBlogPost(mockPosts[0]);
    expect(screen.getByText(mockPosts[0].title.rendered)).toBeInTheDocument();
  });

  it('renders the post date', () => {
    renderBlogPost(mockPosts[0]);
    const date = convertDateFormat(mockPosts[0].date)
    expect(screen.getByText(new RegExp(date as string, "i"))).toBeInTheDocument();
  });

  it('renders the post author', () => {
    renderBlogPost(mockPosts[0]);
    expect(screen.getByText(mockPosts[0]._embedded.author[0].name)).toBeInTheDocument();
  });

  it('renders the post featured media', () => {
    renderBlogPost(mockPosts[0]);
    const imageElement = screen.getByAltText(mockPosts[0].title.rendered);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', mockPosts[0].featured_media);
  });
});
