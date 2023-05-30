import styled from 'styled-components';

const AuthContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.strongBlack};
  border-radius: 32px;
  padding: 48px 80px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export default AuthContainer;