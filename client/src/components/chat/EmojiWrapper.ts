import styled from 'styled-components';

const EmojiWrapper = styled.div`
  position: relative;

  svg {
    color: ${({ theme }) => theme.colors.yellow};
    font-size: 26px;
    cursor: pointer;
  }
`;

export default EmojiWrapper;