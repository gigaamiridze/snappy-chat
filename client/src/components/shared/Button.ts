import styled, { css } from 'styled-components';

const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.hanPurple};
    color: ${theme.colors.white};
    font-family: ${theme.fonts.primary};
    transition: ${theme.transition};
  `}
  height: 50px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 15px;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.mediumPurple};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.mediumPurple};
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    height: 48px;
  }

  @media (max-width: 480px) {
    height: 45px;
    font-size: 15.5px;
  }

  @media (max-width: 375px) {
    font-size: 15px;
  }

  @media (max-width: 320px) {
    height: 43px;
    font-size: 14.5px;
  }
`;

export const AuthButton = styled(Button)`
  width: 100%;
`;

export const AvatarButton = styled(Button)`
  width: 270px;
`;