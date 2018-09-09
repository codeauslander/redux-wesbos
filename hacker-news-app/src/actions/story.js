import {
    STORIES_ADD,
    STORIES_FETCH,
    STORIES_FETCH_ERROR,
} from '../constants/actionTypes';

const doFetchStories = query => ({
    type: STORIES_FETCH,
    query,
});

const doAddStories = stories => ({
    type: STORIES_ADD,
    stories,
});

const doFetchStoriesError = error => ({
    type: STORIES_FETCH_ERROR,
    error,
});

export {
    doFetchStories,
    doAddStories,
    doFetchStoriesError,
}