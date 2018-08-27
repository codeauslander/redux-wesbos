import React, { Component } from 'react';
import './App.css';
import cs  from 'classnames';

const GRID_SIZE = 35;
const GRID = [];

for (var i = 0; i <= GRID_SIZE; i++) {
  GRID.push(i);
}

// console.log(GRID);

const isBorder = (x,y) => x === 0 || y === 0 || x === GRID_SIZE || y === GRID_SIZE;

const getCellCs = (x,y) => cs('grid-cell',{
  'grid-cell-border': isBorder(x,y),
});



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="app">
        <h1>Snake</h1>
        <Grid />
      </div>
    );
  }
}

const Grid = () => <div>{GRID.map(y =>  <Row key={y} y={y} />)}</div>;
const Row = ({y}) => <div className='grid-row'>{GRID.map(x => <Cell key={x} x={x} y={y} />)}</div>;
// const Cell = ({x,y}) => {
  // const cellClassName = cs('grid-cell',{
  //   'grid-cell-border': x === 0 || y === 0 || x === GRID_SIZE || y === GRID_SIZE,
  // });

  // const cellClassName = ['grid-cell'];
  // if (x === 0 || y === 0 || x === GRID_SIZE || y === GRID_SIZE) {
  //   cellClassName.push('grid-cell-border');
  // };
  // return <div className={cellClassName.join(' ')} />;

  // return <div className={cellClassName} />;
// };

const Cell = ({x,y}) => <div className={getCellCs(x,y)} />;

export default App;
