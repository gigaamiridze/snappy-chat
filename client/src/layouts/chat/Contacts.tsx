import { useState, useEffect } from 'react';
import { ContactProps } from '../../interfaces';
import { Brand } from '../../layouts';
import { ContactsContainer } from '../../components';

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
    </ContactsContainer>
  )
}

export default Contacts;