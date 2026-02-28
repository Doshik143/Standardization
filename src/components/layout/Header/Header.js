import { HeaderContainer, HeaderTitle } from "./Header.styles";

/**
 * @module Header
 * @description Шапка додатку з заголовком
 */

/**
 * @param {Object} props
 * @param {string} props.title - Заголовок сторінки
 * @returns {JSX.Element} Компонент шапки
 */
const Header = ({ title = "Maze Runner" }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
