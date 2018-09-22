import React from 'react';
import Square from './Square';
import './Board.css';

export default class Board extends React.Component {
  render() {
    const { onClick: handleClick, squares } = this.props;
    return (
      <div className={'board'}>
        <div>
          <Square onClick={handleClick(0)} value={squares[0]} />
          <Square onClick={handleClick(1)} value={squares[1]} />
          <Square onClick={handleClick(2)} value={squares[2]} />
        </div>

        <div>
          <Square onClick={handleClick(3)} value={squares[3]} />
          <Square onClick={handleClick(4)} value={squares[4]} />
          <Square onClick={handleClick(5)} value={squares[5]} />
        </div>

        <div>
          <Square onClick={handleClick(6)} value={squares[6]} />
          <Square onClick={handleClick(7)} value={squares[7]} />
          <Square onClick={handleClick(8)} value={squares[8]} />
        </div>
      </div>
    );
  }
}
