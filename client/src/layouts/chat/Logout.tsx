import { MdPowerSettingsNew } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login'); 
  }

  return (
    <Button onClick={handleLogout}>
      <MdPowerSettingsNew title='Logout' />
    </Button>
  )
}

export default Logout;