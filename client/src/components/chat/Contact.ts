import styled, { css } from 'styled-components';
import { IContactProps } from '../../interfaces';

export const Contact = styled.div<IContactProps>`
  ${({ isSelectedContact, theme }) => css`
    background-color: ${isSelectedContact ? theme.colors.mediumPurple : theme.colors.darkGray};
    transition: ${theme.transition};
  `}
  min-height: 70px;
  width: 90%;
  border-radius: 5px;
  padding: 6px 20px;
  display: flex;
  align-items: center;
  column-gap: 16px;
  cursor: pointer;

  @media (max-width: 850px) { padding: 6px 12px; }
  @media (max-width: 768px) { min-height: 65px; }
  
  @media (max-width: 480px) { 
    min-height: 60px;
    column-gap: 14px;
  }

  @media (max-width: 375px) {
    min-height: 55px;
    column-gap: 10px;
    padding: 6px 10px;
  }
`;

export const ContactsBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 13px;

  @media (max-width: 700px) {
    grid-area: 1 / 2 / 3 / auto;
    padding: 13px 0;
  }

  @media (max-width: 480px) {
    row-gap: 11px;
    padding: 11px 0;
  }

  @media (max-width: 375px) {
    row-gap: 10px;
    padding: 10px 0;
  }
`;

export const ContactsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 13px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.darkGray};
    width: 1.5px;
    border-radius: 16px;
  }

  @media (max-width: 480px) { row-gap: 11px; }
  @media (max-width: 375px) { row-gap: 10px; }
`;