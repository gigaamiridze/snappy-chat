import { useState, useEffect } from 'react';
import { DefaultAvatar } from '../../assets';
import { IContactsProps, IUser } from '../../interfaces';
import { Brand } from '../../layouts';
import {
  ContactsContainer, ContactsBlock, Contact,
  AvatarImg, CurrentUser, Username
} from '../../components';

function Contacts(props: IContactsProps) {
  const { contacts, currentUser, changeChat } = props;
  const [currentUsername, setCurrentUsername] = useState<string | undefined>(undefined);
  const [currentUserImage, setCurrentUserImage] = useState<string | undefined>(undefined);
  const [selectedContact, setSelectedContact] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (currentUser) {
      setCurrentUsername(currentUser.username);
      setCurrentUserImage(currentUser.avatarImage);
    }
  }, [currentUser]);

  const changeCurrentChat = (id: string, contact: IUser) => {
    setSelectedContact(id);
    changeChat(contact);
  }

  return (
    <>
      {currentUsername && currentUserImage && (
        <ContactsContainer>
          <Brand isAuthContent={false} />
          <ContactsBlock>
            {contacts.map(contact => {
              const { id, username, avatarImage, isAvatarImageSet } = contact;

              return (
                <Contact 
                  key={id}
                  isSelectedContact={selectedContact === id ? true : false}
                  onClick={() => changeCurrentChat(id, contact)}
                >
                  <AvatarImg
                    src={
                      isAvatarImageSet
                        ? `data:image/svg+xml;base64,${avatarImage}`
                        : DefaultAvatar
                    }
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