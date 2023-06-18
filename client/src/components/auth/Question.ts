import styled, { css } from 'styled-components';

const Question = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(14.5px, 3.3vw, 16px);
  text-transform: uppercase;

  @media (max-width: 440px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 5px;
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