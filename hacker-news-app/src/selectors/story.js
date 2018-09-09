const isNotArchived = (archivedIds) => {
  return (story) => archivedIds.indexOf(story.objectID) === -1;
} ;

const getReadebleStories = ({ storyState, archiveState }) => {
  return storyState.stories.filter(isNotArchived(archiveState));
};

const getFetchError = ({ storyState }) => storyState.error;

export {
  getReadebleStories,
  getFetchError,
};