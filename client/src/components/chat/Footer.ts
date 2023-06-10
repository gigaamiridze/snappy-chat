import styled from 'styled-components';

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.nightBlue};
  display: grid;
  grid-template-columns: 5% 95%;
  align-items: center;
  padding: 0 25px;
  border-bottom-right-radius: 32px;
`;

export default Footer;