import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button, Container, Input, StyledForm, Text } from './Pages.styled';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      logIn({
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    );
    e.target.reset();
  };

  return (
    <Container>
      <Text>Login</Text>
      <StyledForm onSubmit={handleSubmit}>
        <Input type="email" name="email" placeholder="Enter email" required />
        <Input
          type="password"
          name="password"
          placeholder="Enter password"
          required
          minLength={8}
        />
        <Button type="submit">Login</Button>
      </StyledForm>
    </Container>
  );
};

export default Login;
