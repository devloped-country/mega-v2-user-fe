import MenuHeader from './MenuHeader';
import MenuList from './MenuList';
import { useNavigate } from 'react-router-dom';

function MenuContent() {
  const navigate = useNavigate();

  const handleUserInfo = () => {
    navigate('/info');
  }

  return (
    <>
      <MenuHeader 
      onButtonAction={handleUserInfo}/>
      <MenuList />
    </>
  );
}

export default MenuContent;
