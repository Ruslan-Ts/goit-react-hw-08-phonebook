import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <body>
      <div>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </nav>
          {isLoggedIn ? <UserMenu /> : <></>}
        </header>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </body>
  );
};

export default Layout;
