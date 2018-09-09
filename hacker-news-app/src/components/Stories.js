 import React from 'react';
import PropTypes from 'prop-types';
import './Stories.css';
import Story from './Story';
import { connect } from 'react-redux';
// import { doArchiveStory } from '../actions/archive';
import { getReadebleStories, getFetchError } from '../selectors/story';


const COLUMNS = {
  title:{
    label: 'Title',
    width: '40%',
  },
  author:{
    label: 'Author',
    width: '30%',
  },
  comments:{
    label: 'Comments',
    width: '10%',
  },
  points:{
    label: 'Points',
    width: '10%',
  },
  archive:{
    width: '10%',
  },
};

// const Stories = ({ stories, onArchive }) => {
  const Stories = ({ stories, error }) => {
  console.log(stories);
  return (
    <div className='stories'>

      <StoriesHeader columns={COLUMNS} />

      {error && <p className='error'> Error... Something went wrong...</p>  }

      {(stories || []).map( (story) => 
        <Story 
          key={story.objectID} 
          story={story} 
          columns={COLUMNS} 
          // onArchive={onArchive}
        />
      )}
    </div>
  );
};

const StoriesHeader = ({ columns }) =>
  <div className="stories-header">
    {Object.keys(columns).map(key =>
      <span
        key={key}
        style={{ width: columns[key].width }}
      >
        {columns[key].label}
      </span>
    )}
  </div>;

const mapStateToProps = state => ({
  stories: getReadebleStories(state),
  error: getFetchError(state),
});

// const mapDispatchToProps = dispatch => ({
//   onArchive: id => dispatch(doArchiveStory(id)),
// });

  

Stories.propTypes = {
  stories: PropTypes.array,
  columns: PropTypes.array,
};

Stories.defaultProps = {
  stories: [],
  columns: []
};

// export default Stories;
export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(Stories) ;