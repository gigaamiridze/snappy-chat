import { SnappyLogo } from '../../assets';
import { BrandContent, Logo, ChatName } from '../../components';

function Brand() {
  return (
    <BrandContent>
      <Logo src={SnappyLogo} alt='Snappy' />
      <ChatName>snappy</ChatName>
    </BrandContent>
  )
}

export default Brand;