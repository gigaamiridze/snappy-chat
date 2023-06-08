import { useState, useEffect } from 'react';
import { Avatar } from '../../assets';
import { ContactProps } from '../../interfaces';
import { Brand } from '../../layouts';
import { ContactsContainer, ContactsBlock, Contact } from '../../components';

function Contacts(props: ContactProps) {
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
          <img src={Avatar} alt='Avatar' />
          <h3>felix</h3>
        </Contact>
      </ContactsBlock>
    </ContactsContainer>
  )
}

export default Contacts;