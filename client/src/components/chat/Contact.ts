import styled, { css } from 'styled-components';

const Contact = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkGray};
    transition: ${theme.transition};
  `}
  min-height: 80px;
  width: 90%;
  border-radius: 5px;
  padding: 6px 20px;
  display: flex;
  align-items: center;
  column-gap: 16px;
  cursor: pointer;

  img {
    height: 48px;
  }

  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    font-weight: 700;
  }
`;

export default Contact;