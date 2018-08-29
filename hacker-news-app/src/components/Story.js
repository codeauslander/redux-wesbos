import React from 'react';
import PropTypes from 'prop-types';
import './Story.css';

const Story = ({ story }) => {
  const { 
    title,
    url,
    author,
    num_comments,
    points,
  } = story;
  
  return (
    <div className='story'> 
      <span>
        <a href={url}>{title}</a>
      </span>
      <span>
        {author}
      </span>
      <span>
        {num_comments}
      </span>
      <span>
        {points}
      </span>
    </div>
  );
};

Story.propTypes = {
  story: PropTypes.object,
}

Story.defaultProps = {
  story: {},
}

export default Story;
