import styled from 'styled-components';
import { IAvatarImgProps } from '../../interfaces';

const AvatarImg = styled.img<IAvatarImgProps>`
  height: ${({ isChatContent }) => isChatContent ? '48px' : '90px'};

  @media (max-width: 768px) {
    height: ${({ isChatContent }) => isChatContent ? '46px' : '85px'};
  }

  @media (max-width: 480px) {
    height: ${({ isChatContent }) => isChatContent ? '44px' : null};
  }

  @media (max-width: 420px) {
    height: ${({ isChatContent }) => isChatContent ? '42px' : '80px'};
  }

  @media (max-width: 375px) {
    height: ${({ isChatContent }) => isChatContent ? null : '75px'};
  }

  @media (max-width: 320px) {
    height: ${({ isChatContent }) => isChatContent ? '40px' : '72px'};
  }
`;

export default AvatarImg;