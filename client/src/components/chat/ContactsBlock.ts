import styled from 'styled-components';

const ContactsBlock = styled.div`
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

export default ContactsBlock;