import styled from 'styled-components';
import { IAvatarImgProps } from '../../interfaces';

const AvatarImg = styled.img<IAvatarImgProps>`
  height: ${({ isChatContent }) => isChatContent ? '48px' : '90px'};

  @media (max-width: 768px) {
    height: ${({ isChatContent }) => isChatContent ? '46px' : '85px'};
  }

  @media (max-width: 420px) {
    height: ${({ isChatContent }) => isChatContent ? null : '80px'};
  }

  @media (max-width: 375px) {
    height: ${({ isChatContent }) => isChatContent ? null : '75px'};
  }

  @media (max-width: 320px) {
    height: ${({ isChatContent }) => isChatContent ? null : '72px'};
  }
`;

export default AvatarImg;