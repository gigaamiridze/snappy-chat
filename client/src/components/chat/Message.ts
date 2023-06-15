import styled, { css } from 'styled-components';
import { IMessageType } from '../../interfaces';

export const MessagesContainer = styled.div`
  padding: 16px 25px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.transparentWhite};
    width: 1.5px;
    border-radius: 16px;
  }
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
  padding: 16px;
  font-size: 16px;
  border-radius: 16px;
  overflow-wrap: break-word;
`;

export const NoMessagesContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  row-gap: 30px;

  img {
    width: 145px;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
  }
`;