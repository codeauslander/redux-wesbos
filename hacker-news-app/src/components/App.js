import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Stories from './Stories';

// const App = ({stories, onArchive}) => {
  const App = () => {
  // console.log(stories); 
  return (
    <div className='app'>
      <Stories 
        // stories={stories} 
        // onArchive={onArchive}
      />
    </div>
  );
};

App.propTypes = {
  stories: PropTypes.array,
};

App.defaultProps = {
  stories: [],
};

export default App;