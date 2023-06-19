import styled, { css } from 'styled-components';

export const ChatForm = styled.form`
  background-color: ${({ theme }) => theme.colors.transparentWhite};
  width: 100%;
  border-radius: 32px;
  display: flex;
  align-items: center;
  column-gap: 18px;

  @media (max-width: 375px) { column-gap: 15px; }
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
  font-size: clamp(15px, 4vw, 17px);

  @media (max-width: 375px) { 
    padding-left: 15px;
  }
`;

export const ChatInput = styled(Input)`
  background-color: transparent;
`;

export const SearchInput = styled(Input)`
  background-color: ${({ theme }) => theme.colors.transparentWhite};
  min-height: 35px;
  border-radius: 32px;
  padding-right: 18px;

  @media (max-width: 480px) { min-height: 33px; }

  @media (max-width: 375px) { 
    padding-right: 15px;
    min-height: 32px;
  }
`;