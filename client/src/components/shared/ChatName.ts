import styled, { css } from 'styled-components';
import { BrandProps } from '../../interfaces';

const ChatName = styled.h1<BrandProps>`
  ${({ isAuthContent, theme }) => css`
    color: ${theme.colors.white};
    font-size: ${isAuthContent ? '30px' : '17px'};
  `}
  font-weight: 700;
  text-transform: uppercase;
`;

export default ChatName;