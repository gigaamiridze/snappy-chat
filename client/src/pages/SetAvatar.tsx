import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Buffer } from 'buffer';
import axios from 'axios';
import { Loader } from '../assets';
import { IUser } from '../interfaces';
import { getRandomNumber } from '../utils';
import { ApiRoutes, PagesRoutes, AvatarApi, App } from '../constants';
import { SetAvatarContainer, PickAvatarTitle, Avatars, AvatarWrapper, AvatarImg, AvatarButton } from '../components';

function SetAvatar() {
  const [avatars, setAvatars] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedAvatar, setSelectedAvatar] = useState<number | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem(App.SNAPPY_CHAT_USER)) {
      navigate(PagesRoutes.LOGIN);
    }
    getAvatars();
  }, []);
  
  const getAvatars = async () => {
    try {
      const data: string[] = [];
      for (let i = 0; i < 4; i++) {
        const rndNum = getRandomNumber();
        const image = await axios.get(`${AvatarApi.URL}/${rndNum}?apikey=${AvatarApi.KEY}`);
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
      const userInfo = localStorage.getItem(App.SNAPPY_CHAT_USER);
      if (userInfo) {
        const user: IUser = await JSON.parse(userInfo);
        const { data } = await axios.post(`${ApiRoutes.SET_AVATAR}/${user.id}`, {
          image: avatars[selectedAvatar],
        });
        
        if (data.isSet) {
          user.isAvatarImageSet = true;
          user.avatarImage = data.image;
          localStorage.setItem(App.SNAPPY_CHAT_USER, JSON.stringify(user));
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