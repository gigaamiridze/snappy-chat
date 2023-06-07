import { useState, useEffect } from 'react';
import { ContactProps } from '../../interfaces';

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
    <div>Contacts</div>
  )
}

export default Contacts;