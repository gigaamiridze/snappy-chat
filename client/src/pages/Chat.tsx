import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Socket, io } from 'socket.io-client';
import axios from 'axios';
import { IUser } from '../interfaces';
import { pageAnimation } from '../animations';
import { ApiRoutes, PagesRoutes, App } from '../constants';
import { Contacts, Welcome, ChatContent } from '../layouts';
import { ChatContainer } from '../components';

function Chat() {
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);
  const [currentChat, setCurrentChat] = useState<IUser | undefined>(undefined);
  const [contacts, setContacts] = useState<IUser[]>([]);
  const socket = useRef<Socket | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem(App.SNAPPY_CHAT_USER);
    if (!userInfo) {
      navigate(PagesRoutes.LOGIN);
    } else {
      setCurrentUser(JSON.parse(userInfo));
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      socket.current = io(ApiRoutes.HOST);

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
    <ChatContainer
      variants={pageAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
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