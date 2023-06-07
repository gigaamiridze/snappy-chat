import { SnappyLogo } from '../../assets';
import { BrandProps } from '../../interfaces';
import { BrandContent, Logo, ChatName } from '../../components';

function Brand({ isAuthContent }: BrandProps) {
  return (
    <BrandContent isAuthContent={isAuthContent}>
      <Logo src={SnappyLogo} isAuthContent={isAuthContent} alt='Snappy' />
      <ChatName isAuthContent={isAuthContent}>snappy</ChatName>
    </BrandContent>
  )
}

export default Brand;