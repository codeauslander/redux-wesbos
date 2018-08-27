import React, { Component } from 'react';
import './App.css';
import cs  from 'classnames';

const GRID_SIZE = 35;
const GRID = [];

const TICK_RATE = 100;
// const DIRECTION = { RIGHT:'RIGHT', LEFT:'LEFT', UP:'UP', DOWN:'DOWN' };
const DIRECTION_TICKS = {
  RIGHT: (x,y) => ({ x: x+1, y }), 
  LEFT: (x,y) => ({ x: x-1, y }), 
  UP: (x,y) => ({ x, y: y-1 }),  
  DOWN: (x,y) => ({ x, y: y+1 }), 
}

const KEY_CODES_MAPPER = {
  37:'LEFT',
  38:'UP',
  39:'RIGHT',
  40:'DOWN',
}


for (var i = 0; i <= GRID_SIZE; i++) {
  GRID.push(i);
}

// console.log(GRID);

const isBorder = (x, y) => x === 0 || y === 0 || x === GRID_SIZE || y === GRID_SIZE;

const isPosition = (x, y, diffX, diffY) => x === diffX && y === diffY;

const isSnake = (x, y, coordinates) => coordinates.filter(c => isPosition(x, y, c.x, c.y)).length;


const getCellCs = (x, y, snake, snack) => cs('grid-cell',{
  'grid-cell-border': isBorder(x,y),
  'grid-cell-snake': isSnake(x, y, snake.coordinates),
  'grid-cell-snack': isPosition(x, y, snack.coordinates.x, snack.coordinates.y),
});

const getSnakeHead = (snake) => snake.coordinates[0];

const getIsSnakeEating = ({ snake, snack }) => {
  // console.log(snake,snack);
  return isPosition(getSnakeHead(snake).x, getSnakeHead(snake).y, snack.coordinates.x, snack.coordinates.y)
};

const getSnakeWithOutStub = (snake) =>  snake.coordinates.slice(0, snake.coordinates.length - 1);

const  getRandomFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomCoordinates = () => ({ 
  x: getRandomFromRange(1, GRID_SIZE - 1),
  y: getRandomFromRange(1, GRID_SIZE - 1),
});

const applySnakePosition = prevState => {
  // let x;
  // let y;
  
  // switch(prevState.playground.direction) {
  //   case DIRECTION.RIGHT:
  //       x = prevState.snake.coordinates.x + 1;
  //       y = prevState.snake.coordinates.y;
  //       break;
  //   case DIRECTION.LEFT:
  //       x = prevState.snake.coordinates.x - 1;
  //       y = prevState.snake.coordinates.y;
  //       break;
  //   case DIRECTION.UP:
  //       x = prevState.snake.coordinates.x;
  //       y = prevState.snake.coordinates.y + 1 ;
  //       break;
  //   case DIRECTION.DOWN:
  //       x = prevState.snake.coordinates.x;
  //       y = prevState.snake.coordinates.y - 1;
  //       break;
  //   default:
  //     console.log('default switch');
  // }

  // return {
  //   snake: {
  //     coordinates: {
  //       x,
  //       y,
  //     }
  //   }
  // }

  const isSnakeEating = getIsSnakeEating(prevState);
  // console.log(prevState);

  const snakeHead = DIRECTION_TICKS[prevState.playground.direction](
    getSnakeHead(prevState.snake).x,
    getSnakeHead(prevState.snake).y
  );
  // const coordinates = snakeHead(prevState.snake.coordinates.x, prevState.snake.coordinates.y);

  const snakeTail = isSnakeEating ? prevState.snake.coordinates : getSnakeWithOutStub(prevState.snake);

  const snackCoordinates = isSnakeEating ? getRandomCoordinates() : prevState.snack.coordinates;

  return {
    snake: {
      coordinates: [snakeHead, ...snakeTail],
    },
    snack: {
      coordinates: snackCoordinates,
    }
  }

};

const doChangeDirection = (direction) => () => ({playground: { direction } });

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playground:{
        direction: 'RIGHT',
      },
      snake: {
        coordinates: [{
          x: 20,
          y: 20,
        }]
      },
      snack: {
        coordinates: {
          x: 25,
          y: 20,
        }
      }
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.onTick, TICK_RATE); 
    window.addEventListener('keyup', this.onChangeDirection, false);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    window.removeEventListener('keyup', this.onChangeDirection, false);
  }

  onTick = () => {
    this.setState(applySnakePosition);
  }

  onChangeDirection = (event) => {
    const direction = KEY_CODES_MAPPER[event.keyCode];
    if (direction) {
      this.setState(doChangeDirection(direction ));
    }
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
