import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import PageRoutes from './pages/PageRoutes';

function App() {
  const [session, setSession] = useState({});

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <PageRoutes />
      </main>
    </>
  );
}

export default App;
