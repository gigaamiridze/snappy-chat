import styled from 'styled-components';

const AvatarLoader = styled.img`
  @media (max-width: 768px) { height: 450px; }
  @media (max-width: 600px) { height: 400px; }
  @media (max-width: 480px) { height: 350px; }
  @media (max-width: 420px) { height: 325px; }
  @media (max-width: 375px) { height: 300px; }
  @media (max-width: 320px) { 
    width: 100%;
    object-fit: scale-down;
  }
`;

export default AvatarLoader;