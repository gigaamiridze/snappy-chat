import styled, { css } from 'styled-components';

export const ChatForm = styled.form`
  background-color: ${({ theme }) => theme.colors.transparentWhite};
  width: 100%;
  border-radius: 32px;
  display: flex;
  align-items: center;
  column-gap: 18px;
`;

const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.primary};
  `}
  width: 90%;
  border: none;
  outline: none;
  padding-left: 18px;
  font-size: 17px;
`;

export const ChatInput = styled(Input)`
  background-color: transparent;
`;

export const SearchInput = styled(Input)`
  background-color: ${({ theme }) => theme.colors.transparentWhite};
  min-height: 35px;
  border-radius: 32px;
  padding-right: 18px;
`;