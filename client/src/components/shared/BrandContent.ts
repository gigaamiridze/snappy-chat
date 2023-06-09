import styled from 'styled-components';
import { IBrandProps } from '../../interfaces';

const BrandContent = styled.div<IBrandProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: ${({ isAuthContent }) => isAuthContent ? '24px' : '16px'};
`;

export default BrandContent;