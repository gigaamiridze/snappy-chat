import styled from 'styled-components';

export const CurrentUser = styled.div`
  background-color: ${({ theme }) => theme.colors.ceanBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
`;

export const Username = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-weight: 700;
`;

export const NoUsersContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 20px;
  }

  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
    font-weight: 700;
  }
`;