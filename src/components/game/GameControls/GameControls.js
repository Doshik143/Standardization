import Button from "../../UI/Button/Button";
import {
  ControlsContainer,
  ControlsTitle,
  ControlsGrid,
  ControlsHint,
} from "./GameControls.styles";

/**
 * @module GameControls
 * @description Компонент кнопок керування для мобільних пристроїв
 */

/**
 * @param {Object} props - Властивості компонента
 * @param {Function} props.onMove - Функція викликається при натисканні кнопки
 * @param {string} props.activeDirection - Поточний активний напрямок
 * @returns {JSX.Element} Кнопки керування
 */
const GameControls = ({ onMove, activeDirection }) => {
  const directions = [
    { key: "up", label: "↑", code: "ArrowUp" },
    { key: "left", label: "←", code: "ArrowLeft" },
    { key: "down", label: "↓", code: "ArrowDown" },
    { key: "right", label: "→", code: "ArrowRight" },
  ];

  return (
    <ControlsContainer>
      <ControlsTitle>Керування:</ControlsTitle>
      <ControlsGrid>
        {directions.map((direction) => (
          <Button
            key={direction.key}
            variant={
              activeDirection === direction.key ? "primary" : "secondary"
            }
            onClick={() => onMove(direction.key)}
            className="game-controls__button"
          >
            {direction.label}
          </Button>
        ))}
      </ControlsGrid>
      <ControlsHint>Або використовуй клавіші стрілок / WASD</ControlsHint>
    </ControlsContainer>
  );
};

export default GameControls;
