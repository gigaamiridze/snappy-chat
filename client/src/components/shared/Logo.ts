import styled from 'styled-components';
import { BrandProps } from '../../interfaces';

const Logo = styled.img<BrandProps>`
  height: ${({ isAuthContent }) => isAuthContent ? '72px' : '32px'};
`;

export default Logo;