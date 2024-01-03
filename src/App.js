import './App.css';

// importing packages
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importing components
import Home from './Pages/Home Page/Home.tsx';
import Anthology from './Pages/Anthology/Anthology.tsx';
import LoginPage from './Pages/Login/LoginPage.tsx';
import SignUp from './Pages/Sign Up/SignUp.tsx';

function App() {

  const token = localStorage.getItem('key');



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/' element={token ? <Home /> : <LoginPage />} />
          <Route path='/anthology' element={token ? <Anthology /> : <LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;