import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';

const Register = () => {
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
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          autoComplete="off"
        />
        <input
          autoComplete="off"
          type="email"
          name="email"
          placeholder="Enter email"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          autoComplete="off"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
