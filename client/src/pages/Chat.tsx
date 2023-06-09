import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { usersRoute } from '../utils';
import { IUser } from '../interfaces';
import { Contacts, Welcome } from '../layouts';
import { ChatContainer } from '../components';

function Chat() {
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);
  const [contacts, setContacts] = useState<IUser[]>([]);
  const [currentChat, setCurrentChat] = useState<any | undefined>(undefined);
  const navigate = useNavigate();
  
  useEffect(() => {
    const userInfo = localStorage.getItem('snappy-chat-user');
    if (!userInfo) {
      navigate('/login');
    } else {
      setCurrentUser(JSON.parse(userInfo));
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      if (currentUser.isAvatarImageSet) {
        getAllContacts();
      } else {
        navigate('/set-avatar');
      }
    }
  }, [currentUser]);

  const getAllContacts = async () => {
    const { data } = await axios.get(`${usersRoute}/${currentUser?.id}`);
    setContacts(data.users);
  }

  const handleChatChange = (chat: any) => {
    setCurrentChat(chat);
  }

  return (
    <ChatContainer>
      <Contacts 
        contacts={contacts} 
        currentUser={currentUser}
        changeChat={handleChatChange} 
      />
      <Welcome currentUser={currentUser} />
    </ChatContainer>
  )
}

export default Chat;