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

  @media (max-width: 1080px) { grid-template-columns: 30% 70%; }
  @media (max-width: 930px) { grid-template-columns: 35% 65%; }
  @media (max-width: 768px) { grid-template-columns: 38% 62%; }
  
  @media (max-width: 700px) { 
    grid-template-columns: inherit;
    grid-template-rows: 35% 65%;
  }

  @media (max-width: 480px) { width: 100%; }
`;

export const ChatContentContainer = styled(motion.div)`
  display: grid;
  grid-template-rows: 10% 78% 12%;
  padding-top: 16px;
  overflow: hidden;

  @media (max-width: 700px) { grid-template-rows: 15% 70% 15%; }
  @media (max-width: 320px) { padding-top: 12px; }
`;

export const ContactsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.nightBlue};
  display: grid;
  grid-template-rows: 11% 75% 14%;
  overflow: hidden;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;

  @media (max-width: 700px) {
    grid-template-columns: 40% 60%;
    grid-template-rows: 50% 50%;
    border-top-right-radius: 32px;
    border-bottom-left-radius: 0;
  }

  @media (max-width: 480px) { grid-template-columns: 35% 65%; }
`;

export const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  text-align: center;

  @media (max-width: 700px) { flex-direction: row; }
  @media (max-width: 375px) { padding: 0 25px; }

  img {
    height: 320px;

    @media (max-width: 930px) { height: 300px; }
    @media (max-width: 850px) { height: 280px; }
    @media (max-width: 768px) { height: 260px; }
    @media (max-width: 700px) { height: 220px; }
    @media (max-width: 620px) { display: none; }
  }

  h1 {
    font-size: clamp(19px, 2.8vw, 22px);
    margin-bottom: 5px;
    text-align: center;

    span {
      color: ${({ theme }) => theme.colors.hanPurple};
    }
  }
`;