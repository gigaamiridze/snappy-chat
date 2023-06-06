import styled, { css } from 'styled-components';

const ChatContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.strongBlack};
    box-shadow: ${theme.colors.shadowBlack} 0px 5px 15px;
  `}
  width: 85vw;
  height: 85vh;
  display: grid;
  grid-template-columns: 25% 75%;
  border-radius: 32px;
`;

export default ChatContainer;