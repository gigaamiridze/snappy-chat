import styled, { css } from 'styled-components';
import { IBrandProps } from '../../interfaces';

const ChatName = styled.h1<IBrandProps>`
  ${({ isAuthContent, theme }) => css`
    color: ${theme.colors.white};
    font-size: ${isAuthContent ? '30px' : '17px'};
  `}
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: ${({ isAuthContent }) => isAuthContent ? '25px' : '17px'};
  }

  @media (max-width: 480px) {
    font-size: ${({ isAuthContent }) => isAuthContent ? '21px' : '17px'};
  }

  @media (max-width: 420px) {
    font-size: ${({ isAuthContent }) => isAuthContent ? '20px' : '17px'};
  }

  @media (max-width: 375px) {
    font-size: ${({ isAuthContent }) => isAuthContent ? '18px' : '17px'};
  }

  @media (max-width: 320px) {
    font-size: ${({ isAuthContent }) => isAuthContent ? '17px' : '17px'};
  }
`;

export default ChatName;