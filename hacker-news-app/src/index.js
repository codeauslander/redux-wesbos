import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/index';
// import archiveReducer from './reducers/archive';
// import { STORY_ARCHIVE } from './constants/actionTypes';
// import { getReadebleStories } from './selectors/story';
// import { doArchiveStory } from './actions/archive';
import { Provider } from 'react-redux'; 

console.log(store.getState());

// const render = () => {
ReactDOM.render(
  <Provider store={store} >
    <App 
    // // stories={ store.getState().storyState } 
    //   stories={ getReadebleStories(store.getState()) }
    //   // onArchive={ (objectID) => { console.log(objectID) } }
    //   // onArchive={ id => store.dispatch({type: STORY_ARCHIVE, id}) }
    //   onArchive={ id => store.dispatch( doArchiveStory(id) ) } 
    />
  </Provider>,
  document.getElementById('root')
);
// };

// render();
// store.subscribe(render);

registerServiceWorker();
