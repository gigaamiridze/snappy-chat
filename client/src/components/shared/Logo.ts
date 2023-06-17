import styled from 'styled-components';
import { IBrandProps } from '../../interfaces';

const Logo = styled.img<IBrandProps>`
  height: ${({ isAuthContent }) => isAuthContent ? '72px' : '32px'};

  @media (max-width: 768px) {
    height: ${({ isAuthContent }) => isAuthContent ? '65px' : '32px'};
  }

  @media (max-width: 480px) {
    height: ${({ isAuthContent }) => isAuthContent ? '55px' : '32px'};
  }

  @media (max-width: 420px) {
    height: ${({ isAuthContent }) => isAuthContent ? '52px' : '32px'};
  }

  @media (max-width: 375px) {
    height: ${({ isAuthContent }) => isAuthContent ? '48px' : '32px'};
  }

  @media (max-width: 320px) {
    height: ${({ isAuthContent }) => isAuthContent ? '45px' : '32px'};
  }
`;

export default Logo;