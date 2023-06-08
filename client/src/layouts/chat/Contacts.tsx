import { useState, useEffect } from 'react';
import { Avatar } from '../../assets';
import { IContactProps } from '../../interfaces';
import { Brand } from '../../layouts';
import { 
  ContactsContainer, ContactsBlock, Contact, 
  AvatarImg, CurrentUser, Username 
} from '../../components';

function Contacts(props: IContactProps) {
  const { contacts, currentUser } = props;
  const [currentUserName, setCurrentUserName] = useState<string | undefined>(undefined);
  const [currentUserImage, setCurrentUserImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (currentUser) {
      setCurrentUserName(currentUser.username);
      setCurrentUserImage(currentUser.avatarImage);
    }
  }, [currentUser]);

  return (
    <ContactsContainer>
      <Brand isAuthContent={false} />
      <ContactsBlock>
        <Contact>
          <AvatarImg 
            src={Avatar} 
            isChatContent={true} 
            alt='Avatar' />
          <Username>felix</Username>
        </Contact>
      </ContactsBlock>
      <CurrentUser>
        <AvatarImg 
          src={Avatar} 
          isChatContent={true} 
          alt='Avatar' 
        />
        <Username>harvey</Username>
      </CurrentUser>
    </ContactsContainer>
  )
}

export default Contacts;