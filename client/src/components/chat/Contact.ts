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
`;

export const ContactsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  row-gap: 13px;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.darkGray};
    width: 1.5px;
    border-radius: 16px;
  }
`;