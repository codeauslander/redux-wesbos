import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sideDrawerOpen: false
    }
    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
    this.backDropClickHandler = this.backDropClickHandler.bind(this);
  }
  
  drawerToggleClickHandler() {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  }

  backDropClickHandler() {
    this.setState({sideDrawerOpen: false});
  }

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler}/>;
    }
    return (
      <div style={{height:100+'%'}}>
        <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backDrop}
        <main style={{marginTop:'64px'}}>
          <p>Some</p>
        </main>
      </div>
    );
  }
}

export default App;
