import { SnappyLogo } from '../../assets';
import { IBrandProps } from '../../interfaces';
import { BrandContent, Logo, ChatName } from '../../components';

function Brand({ isAuthContent }: IBrandProps) {
  return (
    <BrandContent isAuthContent={isAuthContent}>
      <Logo src={SnappyLogo} isAuthContent={isAuthContent} alt='Snappy' />
      <ChatName isAuthContent={isAuthContent}>snappy</ChatName>
    </BrandContent>
  )
}

export default Brand;