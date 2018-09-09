import { getReadebleStories } from './story';
import deepFreez from 'deep-freeze';

describe('storySelector', () => {
    it('retrieves readable stories from state', () => {
        const   storyState = {
            error: null,
            stories: [
                { objectID: 0, title: 'foo' },
                { objectID: 1, title: 'bar' },
            ]
        };

        const archiveState = [0];

        const state = { storyState, archiveState };

        const expectedReadebleStories = [{ objectID: 1, title: 'bar'}];
        const readableStories = getReadebleStories(state);

        expect(readableStories).toEqual(expectedReadebleStories);
    })
})