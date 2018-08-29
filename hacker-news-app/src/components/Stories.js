import React from 'react';
import PropTypes from 'prop-types';
import './Stories.css';
import Story from './Story';

const Stories = ({ stories }) => {
  console.log(stories);
  return (
    <div className='stories'>
      {(stories || []).map( (story) => 
          <Story key={story.objectId} story={story} />
      )}
    </div>
  );
}
  

Stories.propTypes = {
  stories: PropTypes.array,
}
Stories.defaultProps = {
  stories: [],
}

export default Stories;