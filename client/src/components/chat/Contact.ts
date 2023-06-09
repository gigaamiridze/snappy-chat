import styled, { css } from 'styled-components';
import { IContactProps } from '../../interfaces';

const Contact = styled.div<IContactProps>`
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

export default Contact;