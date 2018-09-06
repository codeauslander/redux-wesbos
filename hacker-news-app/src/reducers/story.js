const INITIAL_STATE =  [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walkie',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://facebook.github.io/reactjs/redux/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const storyReducer = ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
      default: return state;
  }
}; 

export default storyReducer;