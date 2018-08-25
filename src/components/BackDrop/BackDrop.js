import React from 'react';
import './BackDrop.css';

const BackDrop = props => (
  <div className='backDrop' onClick={props.click}/>
);

export default BackDrop;