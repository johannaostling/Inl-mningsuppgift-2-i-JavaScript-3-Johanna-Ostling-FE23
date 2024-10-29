import Board from './Board';
import './App.css';


function App() {
  return (
    <div className="App">
    <h1>Minesweeper</h1>
      <Board/>
    <p>How to Play Minesweeper: <br />
Objective: Clear the grid without hitting mines. <br />
Click: Reveal squares. Numbers show adjacent mines. <br />
Flag: Right-click to mark suspected mines. <br />
Win: Clear all non-mine squares and flag all mines.</p>
    </div>
  );
}

export default App;
