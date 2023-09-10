import { Container, Text } from './Pages.styled';

const NotFound = () => (
  <Container>
    <Text>Page not found</Text>
    <img style={{ height: '100%' }} src="/src/img/noFonnd.png" alt="404" />
  </Container>
);

export default NotFound;
