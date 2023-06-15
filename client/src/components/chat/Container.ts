import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const ChatContainer = styled(motion.div)`
  ${({ theme }) => css`
    background-color: ${theme.colors.strongBlack};
    box-shadow: ${theme.colors.shadowBlack} 0px 5px 15px;
  `}
  width: 85vw;
  height: 85vh;
  display: grid;
  grid-template-columns: 25% 75%;
  border-radius: 32px;
`;

export const ChatContentContainer = styled(motion.div)`
  display: grid;
  grid-template-rows: 10% 78% 12%;
  padding-top: 16px;
  overflow: hidden;
`;

export const ContactsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.nightBlue};
  display: grid;
  grid-template-rows: 11% 75% 14%;
  overflow: hidden;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
`;

export const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;

  img {
    height: 320px;
  }

  h1 {
    font-size: 22px;
    margin-bottom: 5px;

    span {
      color: ${({ theme }) => theme.colors.hanPurple};
    }
  }
`;