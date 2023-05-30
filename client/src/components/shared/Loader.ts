import styled from 'styled-components';

const Loader = styled.span`
  width: 27px;
  height: 27px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid ${({theme}) => theme.colors.white};
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation 0.8s linear infinite;
  
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;