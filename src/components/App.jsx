import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy } from 'react';

const Home = lazy(() => import('../Pages/Home.jsx'));
const Contacts = lazy(() => import('../Pages/Contacts.jsx'));
const Login = lazy(() => import('../Pages/Login.jsx'));
const Register = lazy(() => import('../Pages/Register.jsx'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Contacts />} />
      <Route path="/" element={<Login />} />
      <Route path="/" element={<Register />} />
    </Routes>
  );
};
