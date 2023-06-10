import styled from 'styled-components';

const ChatForm = styled.form`
  background-color: ${({ theme }) => theme.colors.transparentWhite};
  width: 100%;
  border-radius: 32px;
  display: flex;
  align-items: center;
  column-gap: 18px;
`;

export default ChatForm;