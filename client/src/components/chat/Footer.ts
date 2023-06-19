import styled from 'styled-components';

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.nightBlue};
  display: grid;
  grid-template-columns: 5% 95%;
  align-items: center;
  padding: 0 25px;
  border-bottom-right-radius: 32px;

  @media (max-width: 1080px) { grid-template-columns: 7% 93%; }
  @media (max-width: 930px) { grid-template-columns: 10% 90%; }
  @media (max-width: 850px) { padding: 0 20px; }
  
  @media (max-width: 700px) { 
    grid-template-columns: 7% 93%;
    border-bottom-left-radius: 32px;
  }

  @media (max-width: 600px) { grid-template-columns: 9% 91%; }
  @media (max-width: 480px) { padding: 0 16px; }
  @media (max-width: 375px) { grid-template-columns: 11% 89%; }
  @media (max-width: 320px) { 
    padding: 0 12px;
    grid-template-columns: 12% 88%;
  }
`;

export default Footer;