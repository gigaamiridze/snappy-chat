import styled from 'styled-components';

const ChatName = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
`;

export default ChatName;