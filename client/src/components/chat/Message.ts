import styled, { css } from 'styled-components';
import { IMessageType } from '../../interfaces';

export const MessagesContainer = styled.div`
  padding: 16px 25px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.transparentWhite};
    width: 1.5px;
    border-radius: 16px;
  }

  @media (max-width: 850px) { padding: 16px 20px; }

  @media (max-width: 480px) { 
    padding: 16px;
    row-gap: 14px;
  }

  @media (max-width: 320px) { padding: 12px; }
`;

export const MessageWrapper = styled.div<IMessageType>`
  display: flex;
  align-items: center;
  justify-content: ${({ isSended }) => isSended ? 'flex-end' : 'flex-start'};
`;

export const Message = styled.p<IMessageType>`
  ${({ isSended, theme }) => css`
    color: ${theme.colors.silver};
    background-color: ${isSended ? theme.colors.ceanBlue : theme.colors.darkPurple};
  `}
  max-width: 40%;
  padding: 15px;
  font-size: clamp(14.5px, 4vw, 16px);
  line-height: 22px;
  border-radius: 16px;
  overflow-wrap: break-word;
  
  @media (max-width: 480px) { padding: 14px; }
  
  @media (max-width: 375px) { 
    padding: 13px;
    line-height: 21px; 
  }
`;

export const NoMessagesContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  row-gap: 30px;

  @media (max-width: 850px) { padding: 0 20px; }
  @media (max-width: 700px) { row-gap: 25px; }
  @media (max-width: 375px) { row-gap: 20px; }
  @media (max-width: 320px) { padding: 0 12px; }

  img {
    width: 145px;

    @media (max-width: 930px) { width: 135px; }
    @media (max-width: 850px) { width: 125px; }
    @media (max-width: 768px) { width: 110px; }
    @media (max-width: 700px) { width: 100px; }
    @media (max-width: 480px) { width: 90px; }
    @media (max-width: 375px) { width: 80px; }
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(15.5px, 4vw, 18px);

    @media (max-width: 850px) {
      text-align: center;
      line-height: 22px;
    }
  }
`;