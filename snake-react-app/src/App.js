import React, { Component } from 'react';
import './App.css';
import cs  from 'classnames';

const GRID_SIZE = 35;
const GRID = [];

for (var i = 0; i <= GRID_SIZE; i++) {
  GRID.push(i);
}

// console.log(GRID);

const isBorder = (x, y) => x === 0 || y === 0 || x === GRID_SIZE || y === GRID_SIZE;
const isPosition = (x, y, diffX, diffY) => x === diffX && y === diffY;


const getCellCs = (x, y, snake, snack) => cs('grid-cell',{
  'grid-cell-border': isBorder(x,y),
  'grid-cell-snake': isPosition(x, y, snake.coordinates.x, snake.coordinates.y),
  'grid-cell-snack': isPosition(x, y, snack.coordinates.x, snack.coordinates.y),
});



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      snake: {
        coordinates: {
          x: 20,
          y: 20,
        }
      },
      snack: {
        coordinates: {
          x: 10,
          y: 10,
        }
      }
    };
  }
  render() {
    const { snake, snack } = this.state;
    return (
      <div className="app">
        <h1>Snake</h1>
        <Grid snake={snake} snack={snack}/>
      </div>
    );
  }
}

const Grid = ({ snake, snack }) => (
  <div>
    { GRID.map(y =>  <Row key={y} y={y} snake={snake} snack={snack} />) }
  </div>
);
const Row = ({ y, snake, snack }) => <div className='grid-row'>{GRID.map(x => <Cell key={x} x={x} y={y} snake={snake} snack={snack} />)}</div>;
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

const Cell = ({ x, y, snake,snack }) => <div className={getCellCs(x, y, snake, snack)} />;

export default App;
