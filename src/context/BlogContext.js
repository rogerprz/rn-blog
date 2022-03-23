import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOG_POST':
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    case 'DELETE_BLOG_POST':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};
const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: 'ADD_BLOG_POST' });
  };
};

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost }, []);
