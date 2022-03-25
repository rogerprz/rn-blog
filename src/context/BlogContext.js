import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'GET_BLOG_POSTS':
      return action.payload;
    case 'EDIT_BLOG_POST':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case 'ADD_BLOG_POST':
      return [
        ...state,
        {
          id: randomId(),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    case 'DELETE_BLOG_POST':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/blogposts');

    dispatch({ type: 'GET_BLOG_POSTS', payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  // add async after return when attempting to make api call
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', { title, content });

    dispatch({ type: 'ADD_BLOG_POST', payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => dispatch({ type: 'DELETE_BLOG_POST', payload: id });
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({
      type: 'EDIT_BLOG_POST',
      payload: { id, title, content }
    });
    if (callback) {
      callback();
    }
  };
};

const randomId = () => {
  return Math.floor(Math.random() * 100000);
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    addBlogPost,
    deleteBlogPost,
    editBlogPost,
    getBlogPosts
  },
  []
);
