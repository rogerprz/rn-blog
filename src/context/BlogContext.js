import React, { useState } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: '1',
      title: 'Blog Post 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
    },
    {
      id: '2',
      title: 'Blog Post 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
    }
  ]);

  const addBlogPost = (title, content) => {
    title = `Blog post #${blogPosts.length + 1}`;
    setBlogPosts([...blogPosts, { id: blogPosts.length + 1, title, content }]);
  };

  return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>{children}</BlogContext.Provider>;
};

export default BlogContext;
