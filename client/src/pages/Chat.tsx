import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IUser } from '../interfaces';
import { ApiRoutes, PagesRoutes } from '../constants';
import { Contacts, Welcome, ChatContent } from '../layouts';
import { ChatContainer } from '../components';

function Chat() {
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);
  const [currentChat, setCurrentChat] = useState<IUser | undefined>(undefined);
  const [contacts, setContacts] = useState<IUser[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const userInfo = localStorage.getItem('snappy-chat-user');
    if (!userInfo) {
      navigate(PagesRoutes.LOGIN);
    } else {
      setCurrentUser(JSON.parse(userInfo));
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      if (currentUser.isAvatarImageSet) {
        getAllContacts();
      } else {
        navigate(PagesRoutes.SET_AVATAR);
      }
    }
  }, [currentUser]);

  const getAllContacts = async () => {
    const { data } = await axios.get(`${ApiRoutes.ALL_USER}/${currentUser?.id}`);
    setContacts(data.users);
  }

  const handleChatChange = (chat: IUser) => {
    setCurrentChat(chat);
  }

  return (
    <ChatContainer>
      <Contacts 
        contacts={contacts} 
        currentUser={currentUser}
        changeChat={handleChatChange} 
      />
      {currentChat === undefined ? (
        <Welcome currentUser={currentUser} />
      ) : (
        <ChatContent 
          currentChat={currentChat} 
          currentUser={currentUser}
        />
      )}
    </ChatContainer>
  )
}

export default Chat;