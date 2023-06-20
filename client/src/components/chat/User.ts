import styled from 'styled-components';

export const CurrentUser = styled.div`
  background-color: ${({ theme }) => theme.colors.ceanBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;

  @media (max-width: 480px) { 
    flex-direction: column;
    gap: 12px 0px;
  }

  @media (max-width: 375px) { row-gap: 10px; }
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;

  @media (max-width: 375px) { column-gap: 12px; }
`;

export const Username = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(15.5px, 4.2vw, 18px);
  font-weight: 700;
`;