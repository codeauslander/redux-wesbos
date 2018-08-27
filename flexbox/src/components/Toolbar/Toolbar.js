import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';


const Toolbar = props => (
  <header className='toolbar'>
    <nav className='toolbar__navigation '>
      <div className='toolbar__toggle-button'>
        <DrawerToggleButton click={props.drawerToggleClickHandler}/> 
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