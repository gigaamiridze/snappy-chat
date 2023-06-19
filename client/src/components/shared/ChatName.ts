import styled, { css } from 'styled-components';
import { IBrandProps } from '../../interfaces';

const ChatName = styled.h1<IBrandProps>`
  ${({ isAuthContent, theme }) => css`
    color: ${theme.colors.white};
    font-size: ${isAuthContent ? 'clamp(17px, 5vw, 30px)' : 'clamp(14.5px, 4vw, 17px)'};
  `}
  font-weight: 700;
  text-transform: uppercase;
`;

export default ChatName;