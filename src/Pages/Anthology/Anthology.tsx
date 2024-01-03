import React from 'react';

// importing hooks
import { useState, useEffect } from 'react';

// importing stylesheet
import "./Anthology.css";

// importing Components
import ResponsiveAppBar from '../../Components/Navbar/Navbar.tsx';
import Footer from '../../Components/Footer/Footer.tsx';

// for APIs
import axios from 'axios';

const Anthology = () => {
    const [messageText, setMessageText] = useState("ff");

    useEffect(() => {
        // fetch token from local storage
        const token = localStorage.getItem('key');
        axios.get("http://localhost:8000/api/v1.0.0/anthology/secured/story", {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((results) => {
            console.log(results);
            console.log("results.data.data.story: " + results.data.data.story);

            changeState(results.data.data.story);
            // setMessageText(results.data.data.story);
            console.log("messageText: " + messageText);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    function changeState(myInput) {
        setMessageText(myInput);
        console.log("messageText (inside changeState() function): " + messageText);
    }

    const handleChangeTextArea = (e) => {
        setMessageText(e.target.value);

        console.log(messageText);
    }

    useEffect(() => {
        console.log("messageText in useEffect hook: " + messageText);
    }, [messageText])

    console.log("Hello");

    return (
        <>
            <ResponsiveAppBar />

            <div className="page-heading">
                <h1>Let's See You Write Your Story </h1>
            </div>

            <div className="story">
                <div className="story-input-area">
                    <textarea value={messageText} onChange={handleChangeTextArea} />
                </div>
                <div className="others-story-and-save-button">
                    <div className="others-story">
                        See others' story
                    </div>
                    <div className="save-button">
                        <button>SAVE WORK</button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Anthology