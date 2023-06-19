import styled from 'styled-components';

const Header = styled.header`
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 850px) { padding: 0 20px; }
  @media (max-width: 480px) { padding: 0 16px; }
  @media (max-width: 320px) { padding: 0 12px; }
`;

export default Header;