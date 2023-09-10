import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';
import { Button, Container, Input, StyledForm, Text } from './Pages.styled';

const SignUp = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      signUp({
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    );
    e.target.reset();
  };

  return (
    <Container>
      <Text>Registration</Text>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Enter your name"
          autoComplete="off"
          required
          minLength={3}
        />
        <Input
          autoComplete="off"
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Enter password"
          autoComplete="off"
          required
          minLength={8}
        />
        <Button type="submit">Register</Button>
      </StyledForm>
    </Container>
  );
};

export default SignUp;
