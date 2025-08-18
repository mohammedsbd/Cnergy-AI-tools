import React, { useState, useEffect, useRef } from "react";

// Main component for the draggable slider puzzle
const SliderPuzzle = () => {
  const [board, setBoard] = useState([]);
  const [size, setSize] = useState(3);
  const [moves, setMoves] = useState(0);
  const [shuffling, setShuffling] = useState(false);
  const containerRef = useRef(null);

  // Function to create a new shuffled board
  const initializeBoard = (boardSize) => {
    const totalTiles = boardSize * boardSize;
    let tiles = Array.from({ length: totalTiles }, (_, i) => i + 1);
    tiles[totalTiles - 1] = null; // Represents the empty space

    // Simple shuffling algorithm
    for (let i = tiles.length - 2; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }

    setBoard(tiles);
    setMoves(0);
    setShuffling(false);
  };

  // Check if the puzzle is solved
  const isSolved = () => {
    for (let i = 0; i < board.length - 1; i++) {
      if (board[i] !== i + 1) {
        return false;
      }
    }
    return board[board.length - 1] === null;
  };

  // Handle tile clicks
  const handleTileClick = (index) => {
    const emptyIndex = board.indexOf(null);
    const row = Math.floor(index / size);
    const col = index % size;
    const emptyRow = Math.floor(emptyIndex / size);
    const emptyCol = emptyIndex % size;

    // Check if the tile is adjacent to the empty space
    if (
      (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
      (Math.abs(col - emptyCol) === 1 && row === emptyRow)
    ) {
      const newBoard = [...board];
      [newBoard[index], newBoard[emptyIndex]] = [
        newBoard[emptyIndex],
        newBoard[index],
      ];
      setBoard(newBoard);
      setMoves(moves + 1);
    }
  };

  // Initialize on mount
  useEffect(() => {
    initializeBoard(size);
  }, [size]);

  return (
    <div className="puzzle-container" ref={containerRef}>
      <h1>Slider Puzzle</h1>
      <div
        className="puzzle-board"
        style={{
          gridTemplateColumns: `repeat(${size}, 1fr)`,
        }}
      >
        {board.map((tile, index) => (
          <div
            key={index}
            className={`puzzle-tile ${tile === null ? "empty" : ""}`}
            onClick={() => handleTileClick(index)}
          >
            {tile}
          </div>
        ))}
      </div>
      <div className="controls">
        <p>Moves: {moves}</p>
        <button onClick={() => initializeBoard(size)}>Reset</button>
        {isSolved() && <p className="solved-message">You Solved It!</p>}
      </div>
    </div>
  );
};

export default SliderPuzzle;
