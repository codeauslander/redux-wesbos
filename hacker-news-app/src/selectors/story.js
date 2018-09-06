const isNotArchived = (archivedIds) => {
  return (story) => archivedIds.indexOf(story.objectID) === -1;
} ;

const getReadebleStories = ({ storyState, archiveState }) => {
  return storyState.filter(isNotArchived(archiveState));
};

export {
  getReadebleStories,
};