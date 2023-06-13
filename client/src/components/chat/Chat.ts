import styled, { css } from 'styled-components';

export const ChatForm = styled.form`
  background-color: ${({ theme }) => theme.colors.transparentWhite};
  width: 100%;
  border-radius: 32px;
  display: flex;
  align-items: center;
  column-gap: 18px;
`;

export const ChatInput = styled.input`
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