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
          id: action.payload.id,
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
    const response = await jsonServer.get('/blog-posts');

    dispatch({ type: 'GET_BLOG_POSTS', payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  // add async after return when attempting to make api call
  return (title, content, callback) => {
    //   try catch statement to handle error
    // try {
    //     away axios.post('text', title, content)
    //     dispatch({ type: 'ADD_BLOG_POST', payload: { title, content } });
    //     if (callback) {
    //         callback();
    //         }
    // } catch (error) {
    //     console.log(error);

    // }
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
    editBlogPost
  },
  [{ title: 'TEST POST', content: 'TEST CONTENT', id: randomId() }]
);
