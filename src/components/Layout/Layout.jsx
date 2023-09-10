import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import {
  Header,
  NavContainer,
  PageBox,
  RegContainer,
  StyledLink,
} from './Layout.styled';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <body>
      <PageBox>
        <Header>
          <NavContainer>
            <RegContainer>
              <StyledLink to="/">Home</StyledLink>

              {isLoggedIn ? (
                <>
                  <StyledLink to="/contacts">Contacts</StyledLink>
                </>
              ) : (
                <>
                  <RegContainer>
                    {' '}
                    <StyledLink to="/login">Login</StyledLink>
                    <StyledLink to="/signup">Register</StyledLink>
                  </RegContainer>
                </>
              )}
            </RegContainer>
            {isLoggedIn && <UserMenu />}
          </NavContainer>
        </Header>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </PageBox>
    </body>
  );
};

export default Layout;
