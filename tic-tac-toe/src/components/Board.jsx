
import Square from './components/Square';


function Board()
{
	return (
		<>
		<div className="board-row">
		<Square />
		<Square />
		<Square />
		</div>

		<div className="board-row">
		<Square />
		<Square />
		<Square />
		</div>
		
		<div className="board-row">
		<Square />
		<Square />
		<Square />
		</div>
		
		</>
	);
	
}
export default Board
