// import storyReducer from '../reducers/story';
import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'; 
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const saga = createSagaMiddleware();
const logger = createLogger();
const store = createStore( rootReducer, undefined, applyMiddleware(logger, saga) );

saga.run(rootSaga);

export default store;