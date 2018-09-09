import { addAddStories, doAddStories } from './story';
import { STORIES_ADD } from '../constants/actionTypes';

describe('storyActions', ()=> {
    it('adds stories to an action object ', () => {
        const stories = ['a', 'b'];

        const expectedAction = {
            type: STORIES_ADD,
            stories,
        }

        const  action = doAddStories(stories);

        expect(action).toEqual(expectedAction);
    })
})