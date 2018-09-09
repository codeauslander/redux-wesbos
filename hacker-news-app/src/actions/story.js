import {
    STORIES_ADD,
    STORIES_FETCH,
} from '../constants/actionTypes';

const doFetchStories = query => ({
    type: STORIES_FETCH,
    query,
});

const doAddStories = stories => ({
    type: STORIES_ADD,
    stories,
})

export {
    doFetchStories,
    doAddStories,
}