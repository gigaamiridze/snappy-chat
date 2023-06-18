import styled from 'styled-components'; 

const PickAvatarTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(19px, 4vw, 24px);
  font-weight: 700;

  @media (max-width: 420px) {
    text-align: center;
    line-height: 22px;
  }
`;

export default PickAvatarTitle;