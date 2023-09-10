import { FcMultipleSmartphones } from 'react-icons/fc';
import { Text } from './Pages.styled';

const Home = () => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <FcMultipleSmartphones size={40} />
        <Text>Phonebook</Text>
      </div>
    </>
  );
};

export default Home;
