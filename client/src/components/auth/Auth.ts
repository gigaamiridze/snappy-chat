import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const AuthContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.strongBlack};
  border-radius: 32px;
  padding: 48px 80px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  @media (max-width: 768px) {
    padding: 40px 60px;
    row-gap: 27px;
  }

  @media (max-width: 480px) {
    padding: 35px 45px;
    row-gap: 25px;
  }

  @media (max-width: 440px) {
    width: 100%;
  }

  @media (max-width: 375px) {
    padding: 30px;
    row-gap: 22px;
  }

  @media (max-width: 320px) {
    padding: 20px;
    row-gap: 20px;
  }
`;

export const AuthForm = styled.form`
  width: 305px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  @media (max-width: 768px) {
    row-gap: 27px;
  }

  @media (max-width: 480px) {
    max-width: 300px;
    width: 100%;
    row-gap: 25px;
  }

  @media (max-width: 375px) {
    row-gap: 22px;
  }

  @media (max-width: 320px) {
    row-gap: 20px;
  }
`;

export const AuthInput = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.primary};
    border: 1px solid ${theme.colors.hanPurple};
    transition: ${theme.transition};
  `}
  width: 100%;
  height: 50px;
  background-color: transparent;
  font-size: 16px;
  border-radius: 6px;
  padding: 0 16px;
  outline: none;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.mediumPurple};
  }
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.mediumPurple};
  }

  @media (max-width: 768px) {
    height: 48px;
  }

  @media (max-width: 480px) {
    height: 45px;
  }

  @media (max-width: 320px) {
    height: 43px;
    font-size: 15.5px;
  }
`;