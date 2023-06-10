import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.mediumPurple};
  padding: 8px;
  border-radius: 10px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
  }
`;

export default Button;