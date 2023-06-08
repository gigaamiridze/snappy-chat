import styled from 'styled-components';

const CurrentUser = styled.div`
  background-color: ${({ theme }) => theme.colors.ceanBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export default CurrentUser;