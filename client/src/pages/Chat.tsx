import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatContainer } from '../components';
import { IUser } from '../interfaces';

function Chat() {
  const [currentUser, setCurrentUser] = useState<IUser>({} as IUser);
  const navigate = useNavigate();
  
  useEffect(() => {
    const userInfo = localStorage.getItem('snappy-chat-user');
    if (!userInfo) {
      navigate('/login');
    } else {
      setCurrentUser(JSON.parse(userInfo));
    }
  }, []);

  return (
    <ChatContainer>
      Chat
    </ChatContainer>
  )
}

export default Chat;