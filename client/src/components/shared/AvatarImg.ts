import styled from 'styled-components';
import { IAvatarImgProps } from '../../interfaces';

const AvatarImg = styled.img<IAvatarImgProps>`
  height: ${({ isChatContent }) => isChatContent ? '48px' : '90px'};
`;

export default AvatarImg;