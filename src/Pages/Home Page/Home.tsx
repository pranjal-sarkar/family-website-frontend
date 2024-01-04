import React, { useEffect, useState } from 'react';
import './Home.css';

// importing components
import ResponsiveAppBar from '../../Components/Navbar/Navbar.tsx';
import Footer from '../../Components/Footer/Footer.tsx';
import ActionAreaCard from '../../Components/Cards/Card.tsx';

// importing images
import account_image from '../../Assets/Account_Image.png';
import axios from 'axios';

const Home = () => {
  // const [name, setName] = useState();
  
  // get the name
  const fetchedName = localStorage.getItem('name');
  
  return (
    <>
        <ResponsiveAppBar />

        <div className="account-dp">
            <img src={account_image} alt="" />
        </div>

        <div className="account-name-heading">
            <h1>Welcome {fetchedName}</h1>
        </div>

        <div className="cards">
            <ActionAreaCard />
        </div>

        <Footer />
    </>
  )
}

export default Home