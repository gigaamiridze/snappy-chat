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
  align-items: center;
  flex-direction: column;
  row-gap: 13px;
`;

export const ContactsWrapper = styled(ContactsBlock)`
  width: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.darkGray};
    width: 1.5px;
    border-radius: 16px;
  }
`;