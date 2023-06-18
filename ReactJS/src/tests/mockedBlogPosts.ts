import {BlogPost} from "../types/BlogPost";

export const createMockPosts = (count: number): BlogPost[] => {
  return Array.from({ length: count }).map((_, index) => {
    const id = index + 1;
    return {
      id,
      date: `2023-06-${id.toString().padStart(2, '0')}`,
      link: `http://example.com/post/${id}`,
      title: { rendered: `Post ${id}` },
      author: id,
      featured_media: `http://example.com/post/${id}/featured_image.jpg`,
      _embedded: {
        author: [{
          id,
          name: `Author ${id}`,
          link: `http://example.com/author/${id}`,
        }],
      },
    };
  });
}
