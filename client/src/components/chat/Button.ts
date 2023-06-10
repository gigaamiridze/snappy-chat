import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.mediumPurple};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const LogoutButton = styled(Button)`
  padding: 8px;
  border-radius: 10px;

  svg {
    font-size: 20px;
  }
`;

export const ChatButton = styled(Button)`
  padding: 10px 18px;
  border-radius: 32px;

  svg {
    font-size: 22px;
  }
`;