import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledLink } from './Layout.styled';
import Loader from 'components/Loader';
import { NavContainer, PageBox } from './Layout.styled';
import UserMenu from 'components/UserMenu/UserMenu';

const Layout = () => {
  return (
    <body>
      <PageBox>
        <header>
          <NavContainer>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/register">Register</StyledLink>
          </NavContainer>
          {true ? <UserMenu /> : <></>}
        </header>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </PageBox>
    </body>
  );
};

export default Layout;
