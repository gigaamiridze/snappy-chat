import styled from 'styled-components';

const Avatars = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 540px) {
    gap: 10px;
  }
`;

export default Avatars;