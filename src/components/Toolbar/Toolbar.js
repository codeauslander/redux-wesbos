import React from 'react';
import './Toolbar.css';

const Toolbar = props => (
  <header className='toolbar'>
    <nav className='toolbar__navigation '>
      <div>
      </div>
      <div className='toolbar__logo'><a href='/'>Logo</a></div>
      <div className='spacer_1' />
      <div className='toolbar__items'>
        <ul>
          <li href='/'><a>Products</a></li>
          <li href='/'><a>Users</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;