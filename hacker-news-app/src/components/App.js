import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Stories from './Stories';
import SearchStories from './SearchStories';

// const App = ({stories, onArchive}) => {
  const App = () => {
  // console.log(stories); 
  return (
    <div className='app'>
      <div className="interactions">
        <SearchStories />  
      </div>
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