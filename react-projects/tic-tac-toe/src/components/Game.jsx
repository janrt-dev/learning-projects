import Board from './Board';
import { useState } from 'react';

const Game = () => {
	return (
		<div className="game">
		<div className="game-board">
			<Board />
		</div>
		<div className="game-info">
		<ol> 

		</ol>
		</div>
		</div>
	);
}

export default Game
