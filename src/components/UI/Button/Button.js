import { StyledButton } from "./Button.styles";

/**
 * @module Button
 * @description Універсальна кнопка з варіаціями стилів
 */

/**
 * @param {Object} props - Властивості компонента
 * @param {React.ReactNode} props.children - Вміст кнопки
 * @param {Function} props.onClick - Функція при кліку
 * @param {string} props.variant - Варіант стилю ('primary', 'secondary')
 * @param {boolean} props.disabled - Чи вимкнена кнопка
 * @returns {JSX.Element} Кнопка
 */
const Button = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}) => {
  return (
    <StyledButton variant={variant} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
