import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/form/Form';
import { loginUser } from '../../utils/api';
import styles from './Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const login = async (event) => {
    event.preventDefault();
    setErrors([]);
    try {
      const response = await loginUser({ username, password });
    } catch (error) {
      setErrors((curr) => [...curr, error]);
    }
  };
  return (
    <section className={styles.container}>
      <h2>Welcome back to JWT Tutorial</h2>
      <Form submitFunction={login} errors={errors}>
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
          <p>
            Dont have an account?
            <Link to="/signup" className={styles.link}>
              Signup here
            </Link>
          </p>
        </div>
      </Form>
    </section>
  );
};

export default Login;
