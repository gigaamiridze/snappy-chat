import { useState, useEffect } from 'react';
import { Buffer } from 'buffer';
import axios from 'axios';
import { getRandomNumber } from '../utils';
import { SetAvatarContainer, PickAvatarTitle, Avatars, AvatarWrapper, AvatarImg, AvatarButton } from '../components';

function SetAvatar() {
  const [avatars, setAvatars] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  useEffect(() => {
    getAvatars();
  }, []);

  return (
    <SetAvatarContainer>
      <PickAvatarTitle>Pick an avatar as your profile picture</PickAvatarTitle>
      <Avatars>
        {avatars.slice(0, 4).map((avatar, index) => (
          <AvatarWrapper key={index}>
            <AvatarImg
              src={`data:image/svg+xml;base64,${avatar}`}
              alt={`Avatar ${index}`}
            />
          </AvatarWrapper>
        ))}
      </Avatars>
      <AvatarButton>set as profile picture</AvatarButton>
    </SetAvatarContainer>
  )
}

export default SetAvatar;