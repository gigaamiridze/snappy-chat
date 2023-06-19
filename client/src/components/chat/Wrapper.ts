import styled, { css } from 'styled-components';

export const NotFoundWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 700px) {
    grid-area: 1 / 2 / 3 / auto;
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 20px;

    @media (max-width: 700px) { row-gap: 15px; }
    @media (max-width: 320px) { row-gap: 12px; }
  }

  img {
    @media (max-width: 768px) { height: 60px; }
    @media (max-width: 700px) { height: 55px; }
    @media (max-width: 480px) { height: 50px; }
    @media (max-width: 375px) { height: 45px; }
    @media (max-width: 320px) { height: 40px; }
  }

  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(14px, 4vw, 18px);
    font-weight: 700;
  }
`;

export const EmojiWrapper = styled.div`
  position: relative;

  svg {
    color: ${({ theme }) => theme.colors.yellow};
    font-size: clamp(23px, 5vw, 26px);
    cursor: pointer;
  }

  .EmojiPickerReact {
    ${({ theme }) => css`
      background-color: ${theme.colors.nightBlue};
      box-shadow: 0 0 7px ${theme.colors.mediumPurple};
      border-color: ${theme.colors.mediumPurple} !important;
    `}
    position: absolute !important;
    top: -256px;

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

    .epr-header-overlay {
      padding: 10px;
    }

    .epr-category-nav {
      padding: 0 10px 10px;
    }

    .epr-body::-webkit-scrollbar {
      background-color: ${({ theme }) => theme.colors.nightBlue};
      width: 3px;

      &-thumb {
        background-color: ${({ theme }) => theme.colors.mediumPurple};
        border-radius: 6px;
      }
    }

    .epr-emoji-category-label {
      font-family: ${({ theme }) => theme.fonts.primary};
      font-size: 14px;
      height: 30px !important;
    }

    .epr-preview {
      display: none;
    }
  }
`;