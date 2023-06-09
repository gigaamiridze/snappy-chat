import styled from 'styled-components';

const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;

  img {
    height: 320px;
  }

  h1 {
    font-size: 22px;
    margin-bottom: 5px;

    span {
      color: ${({ theme }) => theme.colors.hanPurple};
    }
  }
`;

export default WelcomeContainer;