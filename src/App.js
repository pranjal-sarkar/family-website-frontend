import logo from './logo.svg';
import './App.css';

// importing components
import ResponsiveAppBar from './Components/Navbar/Navbar.tsx';
import Footer from './Components/Footer/Footer.tsx';
import Login from './Components/Login Credentials/Login.tsx';
import Home from './Pages/Home Page/Home.tsx';

function App() {
  return (
    <>
      {/* <ResponsiveAppBar /> */}
      {/* <Login /> */}
      <Home />
      {/* <Footer /> */}
    </>
  );
}

export default App;
