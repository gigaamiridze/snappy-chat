import { MdPowerSettingsNew } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { LogoutButton } from '../../components';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login'); 
  }

  return (
    <LogoutButton onClick={handleLogout}>
      <MdPowerSettingsNew title='Logout' />
    </LogoutButton>
  )
}

export default Logout;