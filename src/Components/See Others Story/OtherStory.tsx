import React from 'react';

// importing stylesheet
import './OtherStory.css';

// importing react hooks
import { useState, useEffect } from 'react';

// importing components
import ResponsiveAppBar from '../Navbar/Navbar.tsx';
import CustomizedAccordions from '../Accordion/CustomizedAccordions.tsx';

// for APIs
import axios from 'axios';
import process from 'process';

const OtherStory = () => {
  const [userAndStory, setUserAndStory] = useState([]);

  useEffect(() => {
    fetchData();
    console.log("fired once");
  }, []);

  const fetchData = async () => {
    const token = localStorage.getItem('key');

    // const url = process.env.REACT_APP_HOSTED_BACKEND_DOMAIN + '/api/v1.0.0/anthology/' + 'secured/stories';
    const url = 'http://localhost:8000' + '/api/v1.0.0/anthology/' + 'secured/stories';
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      });

      console.log(response);

      setUserAndStory(response.data);
    } catch (error) {
      console.log("There was some problem while fetching other member's work. sorry. please login and try again later")
      alert("There was some problem while fetching other member's work. sorry. please login and try again later")
    }
  }

  return (
    <>
      <ResponsiveAppBar />
      <div className="heading">
        <h1>Click to see Other Member's Story</h1>
      </div>

      <div className="accordion">
        <CustomizedAccordions userAndStory={userAndStory} />
      </div>
    </>
  )
}

export default OtherStory