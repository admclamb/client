import Home from './home/Home';
import Login from './login/Login';
import Signup from './signup/Signup';
import { Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';

const PageRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PageRoutes;
