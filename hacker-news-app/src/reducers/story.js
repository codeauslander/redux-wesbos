import { STORIES_ADD, STORIES_FETCH_ERROR } from '../constants/actionTypes';
// import { applyMiddleware } from 'redux';

const INITIAL_STATE =  {
  stories: [
    // {
    //   title: 'React',
    //   url: 'https://facebook.github.io/react/',
    //   author: 'Jordan Walkie',
    //   num_comments: 3,
    //   points: 4,
    //   objectID: 0,
    // },
    // {
    //   title: 'Redux',
    //   url: 'https://facebook.github.io/reactjs/redux/',
    //   author: 'Dan Abramov, Andrew Clark',
    //   num_comments: 2,
    //   points: 5,
    //   objectID: 1,
    // },
  ],
  error: null,
};

const applyAddStories = (state, action) => ({
  stories: action.stories,
  error: null, 
});

const applyStoriesFetchError = (state, action) => ({
  stories: [],
  error: action.error, 
});
 
const storyReducer = ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
  case STORIES_ADD : {
    return applyAddStories(state, action);
  }
  case STORIES_FETCH_ERROR : {
    return applyStoriesFetchError(state, action);
  }
  default: return state;
  }
}; 

export default storyReducer;