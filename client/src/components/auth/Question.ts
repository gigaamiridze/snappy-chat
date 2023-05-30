import styled, { css } from 'styled-components';

const Question = styled.div`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;

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