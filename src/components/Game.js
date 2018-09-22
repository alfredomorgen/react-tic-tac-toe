import React from 'react';
import Board from './Board';

export default class Game extends React.Component {
  state = {
    isTurnX: false,
    squares: new Array(9).fill(''),
  };

  checkWinner = () => {
    const { squares } = this.state;
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  }

  showWinnerNotification = () => {
    const winner = this.checkWinner();
    if (winner) {
      setTimeout(() => {
        alert(`${winner} wins!`);
      }, 150);
    }
  }

  handleClick = squareNumber => () => {
    if (this.state.squares[squareNumber] === '' && !this.checkWinner()) {
      const newSquares = this.state.squares.slice();
      newSquares[squareNumber] = this.state.isTurnX ? 'X' : 'O';
  
      this.setState({
        squares: newSquares,
        isTurnX: !this.state.isTurnX,
      });  
    }
  }

  render() {
    this.showWinnerNotification();

    return (
      <Board
        onClick={this.handleClick}
        squares={this.state.squares}
      />
    );
  }
}
