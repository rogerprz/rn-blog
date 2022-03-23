import React, { useReducer } from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOG_POST':
      return [...state, { title: action.payload.title, content: action.payload.content, id: Math.random() }];
    case 'DELETE_BLOG_POST':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, [
    { title: 'Initial title', content: 'Initial Content', id: 1 }
  ]);
  const addBlogPost = (title, content) => {
    dispatch({ type: 'ADD_BLOG_POST', payload: { title, content } });
  };
  return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>{children}</BlogContext.Provider>;
};

export default BlogContext;
