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

  @media (max-width: 480px) { padding: 7px; }

  svg {
    font-size: clamp(18px, 4vw, 20px);
  }
`;

export const ChatButton = styled(Button)`
  padding: 10px 18px;
  border-radius: 32px;

  @media (max-width: 850px) { padding: 8px 18px; }
  @media (max-width: 700px) { padding: 8px 14px; }
  @media (max-width: 480px) { padding: 7px 12px; }
  @media (max-width: 480px) { padding: 7px 10px; }

  svg {
    font-size: 22px;

    @media (max-width: 768px) { font-size: 20px; }
    @media (max-width: 480px) { font-size: 19px; }
    @media (max-width: 375px) { font-size: 18px; }
  }
`;