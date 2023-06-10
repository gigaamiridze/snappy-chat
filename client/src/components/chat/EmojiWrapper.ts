import styled, { css } from 'styled-components';

const EmojiWrapper = styled.div`
  position: relative;

  svg {
    color: ${({ theme }) => theme.colors.yellow};
    font-size: 26px;
    cursor: pointer;
  }

  .EmojiPickerReact {
    ${({ theme }) => css`
      background-color: ${theme.colors.nightBlue};
      box-shadow: 0 0 7px ${theme.colors.mediumPurple};
      border-color: ${theme.colors.mediumPurple} !important;
    `}
    position: absolute !important;
    top: -306px;
    height: 300px !important;

    .epr-body::-webkit-scrollbar {
      background-color: ${({ theme }) => theme.colors.nightBlue};
      width: 3px;

      &-thumb {
        background-color: ${({ theme }) => theme.colors.mediumPurple};
        border-radius: 6px;
      }
    }

    .epr-search {
      background-color: transparent !important;
      border-color: ${({ theme }) => theme.colors.mediumPurple} !important;
    }

    input {
      ${({ theme }) => css`
        font-family: ${theme.fonts.primary};
        color: ${theme.colors.white} !important;
      `}
    }

    .epr-preview {
      display: none;
    }
  }
`;

export default EmojiWrapper;