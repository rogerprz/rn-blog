import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOG_POST':
      return [...state, { id: randomId(), title: action.payload.title, content: action.payload.content }];
    case 'DELETE_BLOG_POST':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
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
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => dispatch({ type: 'DELETE_BLOG_POST', payload: id });
};

const randomId = () => {
  return Math.floor(Math.random() * 100000);
};

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, []);
