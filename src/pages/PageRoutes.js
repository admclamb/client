import Home from './home/Home';
import Login from './Login';
import Signup from './Signup';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import NotFound from './NotFound';

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
