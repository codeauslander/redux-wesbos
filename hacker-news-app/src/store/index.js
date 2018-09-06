import { createStore } from 'redux';
// import storyReducer from '../reducers/story';
import rootReducer from '../reducers/index';
const store = createStore(rootReducer);

export default store;