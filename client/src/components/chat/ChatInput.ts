import styled, { css } from 'styled-components';

const ChatInput = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.primary};
  `}
  background-color: transparent;
  width: 90%;
  border: none;
  outline: none;
  padding-left: 18px;
  font-size: 17px;
`;

export default ChatInput;