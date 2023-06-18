import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BlogPosts from './';
import {getPosts} from '../../services/postService';
import {BlogPost} from '../../types/BlogPost'
import {createMockPosts} from "../../tests/mockedBlogPosts";

jest.mock('../../services/postService');

describe('BlogPosts Component', () => {
  let mockGetPosts: jest.MockedFunction<typeof getPosts>;

  // This function can be used to render the component in each test
  const renderBlogPosts = () => render(<BlogPosts/>);

  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    jest.clearAllMocks();

    mockGetPosts = getPosts as jest.MockedFunction<typeof getPosts>;
  });

  it('displays posts when they have been fetched', async () => {
    const mockPosts: BlogPost[] = createMockPosts(2);

    mockGetPosts.mockResolvedValueOnce(mockPosts);

    renderBlogPosts();

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => expect(screen.queryByText('No posts found.')).not.toBeInTheDocument());
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());

    expect(screen.getByText(mockPosts[0].title.rendered)).toBeInTheDocument();
    expect(screen.getByText(mockPosts[1].title.rendered)).toBeInTheDocument();
  });

  it('displays an error message if the fetch fails', async () => {
    mockGetPosts.mockRejectedValueOnce(new Error('Fetch Error'));

    renderBlogPosts();

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText('Error')).toBeInTheDocument());

    expect(screen.getByText('Fetch Error')).toBeInTheDocument();
  });

  it('displays a message if no posts are found', async () => {
    mockGetPosts.mockResolvedValueOnce([]);

    renderBlogPosts();

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/No posts found\./i)).toBeInTheDocument();
    });
  });
});
