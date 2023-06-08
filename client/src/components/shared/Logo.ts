import styled from 'styled-components';
import { IBrandProps } from '../../interfaces';

const Logo = styled.img<IBrandProps>`
  height: ${({ isAuthContent }) => isAuthContent ? '72px' : '32px'};
`;

export default Logo;