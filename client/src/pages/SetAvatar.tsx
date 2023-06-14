import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Buffer } from 'buffer';
import axios from 'axios';
import { Loader } from '../assets';
import { IUser } from '../interfaces';
import { getRandomNumber } from '../utils';
import { ApiRoutes, PagesRoutes } from '../constants';
import { SetAvatarContainer, PickAvatarTitle, Avatars, AvatarWrapper, AvatarImg, AvatarButton } from '../components';

function SetAvatar() {
  const [avatars, setAvatars] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedAvatar, setSelectedAvatar] = useState<number | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('snappy-chat-user')) {
      navigate(PagesRoutes.LOGIN);
    }
    getAvatars();
  }, []);
  
  const API_URL = 'https://api.multiavatar.com';
  const API_KEY = 'nCBNYrwJEdlxaA';

  const getAvatars = async () => {
    try {
      const data: string[] = [];
      for (let i = 0; i < 4; i++) {
        const rndNum = getRandomNumber();
        const image = await axios.get(`${API_URL}/${rndNum}?apikey=${API_KEY}`);
        const buffer = new Buffer(image.data);
        data.push(buffer.toString('base64'));
      }
      setAvatars(data);
      setIsLoading(false);
    } catch (error) {
      throw error;
    }
  }

  const setProfilePicture = async () => {
    if (selectedAvatar === undefined) {
      toast.error('Please select an avatar');
    } else {
      const userInfo = localStorage.getItem('snappy-chat-user');
      if (userInfo) {
        const user: IUser = await JSON.parse(userInfo);
        const { data } = await axios.post(`${ApiRoutes.SET_AVATAR}/${user.id}`, {
          image: avatars[selectedAvatar],
        });
        
        if (data.isSet) {
          user.isAvatarImageSet = true;
          user.avatarImage = data.image;
          localStorage.setItem('snappy-chat-user', JSON.stringify(user));
          navigate(PagesRoutes.ROOT);
        } else {
          toast.error('Error setting avatar. Please try again');
        }
      }
    }
  }

  return (
    <>
      {isLoading ? (
        <img src={Loader} alt='loader' />
      ) : (
        <SetAvatarContainer>
          <PickAvatarTitle>Pick an avatar as your profile picture</PickAvatarTitle>
          <Avatars>
            {avatars.slice(0, 4).map((avatar, index) => (
              <AvatarWrapper
                key={index}
                isSelectedAvatar={selectedAvatar === index ? true : false}
              >
                <AvatarImg
                  src={`data:image/svg+xml;base64,${avatar}`}
                  alt={`Avatar ${index}`}
                  isChatContent={false}
                  onClick={() => setSelectedAvatar(index)}
                />
              </AvatarWrapper>
            ))}
          </Avatars>
          <AvatarButton onClick={setProfilePicture}>set as profile picture</AvatarButton>
        </SetAvatarContainer>
      )}
    </>
  )
}

export default SetAvatar;