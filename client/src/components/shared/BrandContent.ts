import styled from 'styled-components';
import { IBrandProps } from '../../interfaces';

const BrandContent = styled.div<IBrandProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: ${({ isAuthContent }) => isAuthContent ? '24px' : '16px'};

  @media (max-width: 768px) {
    column-gap: ${({ isAuthContent }) => isAuthContent ? '20px' : '14px'};
  }

  @media (max-width: 480px) {
    column-gap: ${({ isAuthContent }) => isAuthContent ? '18px' : null};
  }

  @media (max-width: 375px) {
    column-gap: ${({ isAuthContent }) => isAuthContent ? '15px' : '10px'};
  }
`;

export default BrandContent;