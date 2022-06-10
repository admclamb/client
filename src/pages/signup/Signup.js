import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/form/Form';
import { registerUser } from '../../utils/api';
import styles from './Signup.module.css';
const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const createUser = async (event) => {
    event.preventDefault();
    setErrors([]);
    try {
      if (password !== passwordConfirm) {
        setErrors((curr) => [...curr, 'Passwords do not match']);
        return;
      }
      const response = await registerUser({ username, password });
      navigate('/');
    } catch (error) {
      setErrors((curr) => [...curr, error]);
    }
  };
  return (
    <section className={styles.container}>
      <h2>Welcome to JWT Tutorial</h2>
      <Form submitFunction={createUser} errors={errors}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="username"
            value={username}
            placeholder="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <div>
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input
            id="passwordConfirm"
            type="passwordConfirm"
            value={passwordConfirm}
            placeholder="Confirm Password"
            onChange={({ target }) => setPasswordConfirm(target.value)}
          />
        </div>
      </Form>
    </section>
  );
};

export default Signup;
