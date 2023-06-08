import { useState, useEffect } from 'react';
import { IContactProps } from '../../interfaces';
import { Brand } from '../../layouts';
import {
  ContactsContainer, ContactsBlock, Contact,
  AvatarImg, CurrentUser, Username
} from '../../components';

function Contacts(props: IContactProps) {
  const { contacts, currentUser } = props;
  const [currentUsername, setCurrentUsername] = useState<string | undefined>(undefined);
  const [currentUserImage, setCurrentUserImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (currentUser) {
      setCurrentUsername(currentUser.username);
      setCurrentUserImage(currentUser.avatarImage);
    }
  }, [currentUser]);

  return (
    <>
      {currentUsername && currentUserImage && (
        <ContactsContainer>
          <Brand isAuthContent={false} />
          <ContactsBlock>
            {contacts.map(contact => {
              const { id, username, avatarImage } = contact;

              return (
                <Contact key={id}>
                  <AvatarImg
                    src={`data:image/svg+xml;base64,${avatarImage}`}
                    isChatContent={true}
                    alt={`${username}'s avatar`}
                  />
                  <Username>{username}</Username>
                </Contact>
              )
            })}
          </ContactsBlock>
          <CurrentUser>
            <AvatarImg
              src={`data:image/svg+xml;base64,${currentUserImage}`}
              isChatContent={true}
              alt={`${currentUsername}'s avatar`}
            />
            <Username>{currentUsername}</Username>
          </CurrentUser>
        </ContactsContainer>
      )}
    </>
  )
}

export default Contacts;