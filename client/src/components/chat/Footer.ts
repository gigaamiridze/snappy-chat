import styled from 'styled-components';

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.nightBlue};
  display: grid;
  grid-template-columns: 5% 95%;
  align-items: center;
  padding: 0 25px;
  border-bottom-right-radius: 32px;

  @media (max-width: 1080px) { grid-template-columns: 7% 93%; };
  @media (max-width: 930px) { grid-template-columns: 10% 90%; };
  @media (max-width: 850px) { padding: 0 20px; };
`;

export default Footer;