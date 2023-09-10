import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Button, Container, Text, UserBox } from './UserMenu.styled';
import { VscAccount } from 'react-icons/vsc';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Container>
      <Text>Welcome</Text>
      <UserBox style={{ display: 'flex' }}>
        <VscAccount />
        <Text>{user.name}</Text>
      </UserBox>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Container>
  );
};

export default UserMenu;
