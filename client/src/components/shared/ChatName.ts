import styled, { css } from 'styled-components';
import { IBrandProps } from '../../interfaces';

const ChatName = styled.h1<IBrandProps>`
  ${({ isAuthContent, theme }) => css`
    color: ${theme.colors.white};
    font-size: ${isAuthContent ? 'clamp(17px, 5vw, 30px)' : '17px'};
  `}
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: ${({ isAuthContent }) => isAuthContent ? null : '16.5px'};
  }
`;

export default ChatName;