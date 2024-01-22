import './App.css';

// importing packages
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importing pages
import Home from './Pages/Home Page/Home.tsx';
import Anthology from './Pages/Anthology/Anthology.tsx';
import LoginPage from './Pages/Login/LoginPage.tsx';
import SignUp from './Pages/Sign Up/SignUp.tsx';
import OtherStory from './Components/See Others Story/OtherStory.tsx';

// importing hooks
import { useMemberAuthContext } from './hooks/useMemberAuthContext.js';

function App() {

  const { user } = useMemberAuthContext();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/' element={user ? <Home /> : <LoginPage />} />
          <Route path='/anthology' element={user ? <Anthology /> : <LoginPage />} />
          <Route path='/anthology/other-story' element={user ? <OtherStory /> : <LoginPage />} />

          <Route path='*' element={<h1>Error 404: Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;