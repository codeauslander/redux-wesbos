import { STORY_ARCHIVE } from '../constants/actionTypes';

const INITIAL_STATE = [];
const applyArchiveStory = (state, action) => [...state, action.id];

const archiveReducer = ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
  case STORY_ARCHIVE: {
    // console.log(state, action);
    const newState = applyArchiveStory(state, action);
    // console.log(newState);
    return newState ;
  }
  default: return state;
  }
};

export default archiveReducer;                      