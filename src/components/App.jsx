import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout.jsx';

const Home = lazy(() => import('../Pages/Home.jsx'));
const Contacts = lazy(() => import('../Pages/Contacts.jsx'));
const Login = lazy(() => import('../Pages/Login.jsx'));
const Register = lazy(() => import('../Pages/Register.jsx'));
const NotFound = lazy(() => import('../Pages/NotFound.jsx'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register " element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
