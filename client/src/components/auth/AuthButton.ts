import styled, { css } from 'styled-components';

const AuthButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.hanPurple};
    color: ${theme.colors.white};
    font-family: ${theme.fonts.primary};
    transition: ${theme.transition};
  `}
  width: 100%;
  height: 50px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  border: none;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.mediumPurple};
  }
`;

export default AuthButton;