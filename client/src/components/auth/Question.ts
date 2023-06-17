import styled, { css } from 'styled-components';

const Question = styled.div`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 15.5px;
  }

  @media (max-width: 440px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 7px;
  }

  @media (max-width: 375px) {
    font-size: 15px;
  }

  @media (max-width: 320px) {
    font-size: 14.5px;
  }

  a {
    ${({ theme }) => css`
      color: ${theme.colors.hanPurple};
      transition: ${theme.transition};
    `}
    font-weight: 700;

    &:hover {
      color: ${({ theme }) => theme.colors.mediumPurple};
    }
  }
`;

export default Question;