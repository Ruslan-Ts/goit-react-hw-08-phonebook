import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import Layout from './Layout/Layout.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selectors.js';
import Loader from './Loader.jsx';
import { RestrictedRoute } from './RestrictedRoute.jsx';
import { PrivateRoute } from './PrivateRoute.jsx';
import { refreshAuth } from 'redux/auth/operations.js';
import SignUp from 'Pages/SignUp.jsx';

const Home = lazy(() => import('../Pages/Home.jsx'));
const Contacts = lazy(() => import('../Pages/Contacts.jsx'));
const Login = lazy(() => import('../Pages/Login.jsx'));
// const Register = lazy(() => import('../Pages/Register.jsx'));
const NotFound = lazy(() => import('../Pages/NotFound.jsx'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshAuth());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/signup"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<SignUp />} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
