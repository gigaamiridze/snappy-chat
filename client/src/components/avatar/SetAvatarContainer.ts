import styled from 'styled-components';
import { motion } from 'framer-motion';

const SetAvatarContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 48px;
  
  @media (max-width: 480px) { row-gap: 40px; }
  @media (max-width: 375px) { row-gap: 35px; }
  @media (max-width: 320px) { row-gap: 30px; }
`;

export default SetAvatarContainer;