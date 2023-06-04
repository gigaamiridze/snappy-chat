import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Buffer } from 'buffer';
import axios from 'axios';
import { Loader } from '../assets';
import { getRandomNumber } from '../utils';
import { SetAvatarContainer, PickAvatarTitle, Avatars, AvatarWrapper, AvatarImg, AvatarButton } from '../components';

function SetAvatar() {
  const [avatars, setAvatars] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedAvatar, setSelectedAvatar] = useState<number | undefined>(undefined);

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

  const setProfilePicture = () => {
    if (selectedAvatar === undefined) {
      toast.error('Please select an avatar');
    }
  }

  useEffect(() => {
    getAvatars();
  }, []);

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