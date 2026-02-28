import {
  MazeGridContainer,
  MazeInnerContainer,
  MazeRow,
  MazeCell,
  MazePlaceholder,
  IconWrapper,
} from "./MazeGrid.styles";

/**
 * @module MazeGrid
 * @description Компонент для відображення сітки лабіринту
 */

/**
 * @typedef {Object} CellPosition
 * @property {number} x - Координата рядка
 * @property {number} y - Координата стовпця
 */

/**
 * Рендерить окрему клітинку лабіринту
 * @param {number} rowIndex - Індекс рядка
 * @param {number} colIndex - Індекс стовпця
 * @returns {JSX.Element} Клітинка з відповідним вмістом
 */
const MazeGrid = ({
  maze = [],
  playerPosition = { x: 0, y: 0 },
  exitPosition = { x: 4, y: 4 },
}) => {
  const renderCell = (rowIndex, cellIndex) => {
    const isPlayer =
      playerPosition.x === rowIndex && playerPosition.y === cellIndex;
    const isExit = exitPosition.x === rowIndex && exitPosition.y === cellIndex;
    const isWall = maze[rowIndex] && maze[rowIndex][cellIndex] === 1;

    let cellClass = "maze-cell";
    if (isWall) cellClass += " maze-cell--wall";
    if (isPlayer) cellClass += " maze-cell--player";
    if (isExit) cellClass += " maze-cell--exit";

    return (
      <MazeCell key={cellIndex} className={cellClass}>
        {isPlayer && <IconWrapper>👤</IconWrapper>}
        {isExit && !isPlayer && <IconWrapper>🚪</IconWrapper>}
        {isWall && !isPlayer && !isExit && <IconWrapper>🧱</IconWrapper>}
      </MazeCell>
    );
  };

  return (
    <MazeGridContainer>
      {maze.length > 0 ? (
        <MazeInnerContainer>
          {maze.map((row, rowIndex) => (
            <MazeRow key={rowIndex}>
              {row.map((cell, cellIndex) => renderCell(rowIndex, cellIndex))}
            </MazeRow>
          ))}
        </MazeInnerContainer>
      ) : (
        <MazePlaceholder>🎮 Лабіринт завантажується...</MazePlaceholder>
      )}
    </MazeGridContainer>
  );
};

export default MazeGrid;
