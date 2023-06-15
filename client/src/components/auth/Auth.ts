import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const AuthContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.strongBlack};
  border-radius: 32px;
  padding: 48px 80px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const AuthForm = styled.form`
  width: 305px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
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
`;