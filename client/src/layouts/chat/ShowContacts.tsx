import { useState } from 'react';
import { DefaultAvatar } from '../../assets';
import { IShowContactsProps, IUser } from '../../interfaces';
import { Contact, AvatarImg, Username } from '../../components';

function ShowContacts(props: IShowContactsProps) {
  const [selectedContact, setSelectedContact] = useState<string | undefined>(undefined);
  const { contacts, changeChat } = props;

  const changeCurrentChat = (id: string, contact: IUser) => {
    setSelectedContact(id);
    changeChat(contact);
  }

  return (
    <>
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
    </>
  )
}

export default ShowContacts;