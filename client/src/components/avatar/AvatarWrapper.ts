import styled from 'styled-components';

const AvatarWrapper = styled.div`
  border: 6px solid transparent;
  border-radius: 50%;
  padding: 6px;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.hanPurple};
  }
`;

export default AvatarWrapper;